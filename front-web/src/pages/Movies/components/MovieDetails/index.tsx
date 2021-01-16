import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makePrivateRequest } from '../../../../core/utils/requests';
import { Movie } from '../../../../core/utils/types';
import './styles.scss';

type ParamsType = {
    movieId: string;
}

const MovieDetails = () => {
    const { movieId } = useParams<ParamsType>();
    const [movie, setMovie] = useState<Movie>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        makePrivateRequest({ url: `/movies/${movieId}` })
            .then(res => setMovie(res.data))
            .finally(() => setIsLoading(false));
    }, [movieId])

    return (
        <div className="movie-details-container">
            <div className="movie-details-content">
                {!isLoading &&
                    <>
                        <div className="movie-details">
                            <div className="movie-details-image-content">
                                <img
                                    src={movie?.imgUri}
                                    alt={movie?.title}
                                    className="movie-details-image"
                                />
                            </div>
                            <div className="movie-details-info">
                                <h1 className="movie-details-title">{movie?.title}</h1>
                                <h3 className="movie-details-year">{movie?.year}</h3>
                                <h3 className="movie-details-subtitle">{movie?.subTitle}</h3>
                                <p className="movie-details-synopsis">{movie?.synopsis}</p>
                            </div>
                        </div>
                        <div className="movie-details-save-review-content">
                            <textarea
                                className="form-control movie-details-save-review-input"
                                rows={3}
                                placeholder="Deixe sua avaliação aqui"
                            />
                            <button
                                className="movie-details-save-review-btn btn btn-primary"
                            >
                                <h3 className="movie-details-save-review-btn-text">SALVAR AVALIAÇÂO</h3>
                            </button>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}


export default MovieDetails;