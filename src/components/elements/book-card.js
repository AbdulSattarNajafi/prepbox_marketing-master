import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import classes from './book-card.module.css';

const BookCard = ({ name, image }) => {
    const navigate = useNavigate();
    console.log(name)
    const nameURL = name.replace(/ /g,"-");
    const bookHandler = () => {
        console.log(nameURL)
        if (nameURL) {
            navigate(`${nameURL}`);
        }
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
