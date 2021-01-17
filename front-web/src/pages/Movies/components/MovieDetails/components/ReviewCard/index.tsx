import { ReactComponent as IconStar } from '../../../../../../core/assets/images/icon-star.svg';
import { Review } from '../../../../../../core/utils/types';
import './styles.scss';

type Props = {
    review: Review;
}

const ReviewCard = ({ review }: Props) => {
    return (
        <div className="card-review-content">
            <div className="card-review-user-content">
                <IconStar />
                <h5 className="card-review-user">{review.user.name}</h5>
            </div>
            <p className="card-review">{review.text}</p>
        </div>
    );
}

export default ReviewCard;