import { useEffect, useState } from 'react';
import { makePrivateRequest } from '../../../../core/utils/requests';
import { Genre, MovieResponse } from '../../../../core/utils/types';
import CardMovie from '../CardMovie';
import Select from 'react-select'
import './styles.scss';
import { Link } from 'react-router-dom';
import Pagination from '../../../../core/components/Pagination';


const MoviesList = () => {
    const [movies, setMovies] = useState<MovieResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingGenre, setIsLoadingGenre] = useState(false);
    const [genres, SetGenres] = useState<Genre[]>();
    const [activePage, setActivePage] = useState(0);
    const [genre, setGenre] = useState();

    useEffect(() => {
        setIsLoading(true);
        const params = {
            page: activePage,
            size: 8,
            genreId: genre
        }
        makePrivateRequest({ url: '/movies', params })
            .then(res => {
                setMovies(res.data);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, [activePage, genre]);

    useEffect(() => {
        setIsLoadingGenre(true);
        makePrivateRequest({ url: '/genres' })
            .then(res => SetGenres(res.data))
            .catch(err => console.log(err))
            .finally(() => setIsLoadingGenre(false));
    }, []);

    const handleGenre = (genre: any) => {
        setGenre(genre.id);
    }

    return (
        <div className="movies-container">
            {isLoading ? <div>Loading ...</div> :
                <>
                    <div className="movies-header">
                        <Select
                            options={genres}
                            onChange={handleGenre}
                            classNamePrefix="movies-header-selected"
                            isLoading={isLoadingGenre}
                            getOptionLabel={(option: Genre) => option.name}
                            getOptionValue={(option: Genre) => String(option.id)}
                            theme={theme => ({
                                ...theme,
                                borderRadius: 0,
                                colors: {
                                    ...theme.colors,
                                    primary25: 'rgba(255, 199, 0, 0.2)',
                                    primary: '#FFC700',
                                }
                            })}
                        />
                    </div>
                    <div className="movies-list-content">
                        {
                            movies?.content.map(movie =>
                                <Link to={`/movies/${movie.id}`} key={movie.id}>
                                    <CardMovie movie={movie} />
                                </Link>
                            )
                        }
                    </div>
                    {
                        movies &&
                        <Pagination
                            activePage={activePage}
                            totalPages={movies.totalPages}
                            onChange={page => setActivePage(page)}
                        />
                    }
                </>
            }
        </div>
    );
}

export default MoviesList;