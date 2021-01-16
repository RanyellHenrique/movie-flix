import { useEffect, useState } from 'react';
import { makePrivateRequest } from '../../../../core/utils/requests';
import { Genre, MovieResponse } from '../../../../core/utils/types';
import CardMovie from '../CardMovie';
import Select from 'react-select'
import './styles.scss';
import { Link } from 'react-router-dom';

type Params = {
    genreId?: string;
}


const MoviesList = () => {
    const [movies, setMovies] = useState<MovieResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingGenre, setIsLoadingGenre] = useState(false);
    const [genres, SetGenres] = useState<Genre[]>();
    const [params, setParams] = useState<Params>();

    useEffect(() => {
        setIsLoading(true);
        makePrivateRequest({ url: '/movies', params: params })
            .then(res => {
                setMovies(res.data);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, [params]);

    useEffect(() => {
        setIsLoadingGenre(true);
        makePrivateRequest({ url: '/genres' })
            .then(res => SetGenres(res.data))
            .catch(err => console.log(err))
            .finally(() => setIsLoadingGenre(false));
    }, []);

    const handleGenre = (genre: any) => {
        setParams({ genreId: genre.id });
    }

    return (
        <div className="movies-container">
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
                {isLoading ? <div>Loading ...</div>
                    :
                    movies?.content.map(movie =>
                        <Link to={`/movies/${movie.id}`}>
                            <CardMovie movie={movie} key={movie.id} />
                        </Link>

                    )
                }
            </div>
        </div>
    );
}

export default MoviesList;