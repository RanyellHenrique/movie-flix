import { generateList } from '../../utils/list';
import './styles.scss';

type Props = {
    totalPages: number;
    activePage: number;
    onChange: (item: number) => void;
}

const Pagination = ({ totalPages, activePage, onChange }: Props) => {
    const items = generateList(totalPages);

    return (
        <div className="pagination-container">
            <div className="pagination-content">
                {
                    items.map(item =>
                        <div
                            className={`pagination-item ${item === activePage ? 'active' : ''}`}
                            key={item}
                            onClick={() => onChange(item)}
                        >
                            {item + 1}
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Pagination;