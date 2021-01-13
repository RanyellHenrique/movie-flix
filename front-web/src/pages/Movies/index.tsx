import { useEffect, useState } from 'react';
import { makePrivateRequest } from '../../core/utils/requests';
import { MovieResponse } from '../../core/utils/types';
import CardMovie from './components/CardMovie';
import './styles.scss';



const Movies = () => {
    const [movies, setMovies] = useState<MovieResponse>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        makePrivateRequest({ url: '/movies' })
            .then(res => {
                setMovies(res.data);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div className="movies-container">
            <div className="movies-header">
                header
            </div>
            <div className="movies-list-content">
                {isLoading ? <div>Loading ...</div>
                    :
                    movies?.content.map(movie => 
                    <CardMovie movie={movie}/>)
                }
            </div>
        </div>
    );
}

export default Movies;