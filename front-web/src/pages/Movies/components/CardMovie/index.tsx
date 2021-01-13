import { Movie } from '../../../../core/utils/types';
import './styles.scss';

type Props = {
    movie: Movie;
}

const CardMovie = ({ movie }: Props) => {
    return (
        <div className="card-container">
            <img src={movie.imgUri} alt="" className="card-image" />
            <div className="card-info-content">
                <h4 className="card-title">{movie.title}</h4>
                <h5 className="card-title-year">{movie.year}</h5>
                <p className="card-subtitle">{movie.subTitle}</p>
            </div>
        </div>
    );
}

export default CardMovie;