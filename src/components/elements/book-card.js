import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import classes from './book-card.module.css';

const BookCard = ({ name, commonName, image, id }) => {
    const navigate = useNavigate();

    const bookHandler = () => {
        navigate(commonName);
        // localStorage.setItem('__book_id', id);
    };

    return (
        <div className={classes.card} onClick={bookHandler}>
            <div className={classes['card__image']}>
                <LazyLoadImage src={image} alt={name} width='200' height='200' />
            </div>
        </div>
    );
};

export default BookCard;
