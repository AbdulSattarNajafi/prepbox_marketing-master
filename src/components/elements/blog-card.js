import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import classes from './blog-card.module.css';

const BlogCard = ({ image, title, subtitle, link, date, postId }) => {
    const navigate = useNavigate();

    const postDetailHandler = () => {
        if (postId) {
            navigate(`${postId}`);
        }
    };

    return (
        <div className={classes.card} onClick={postDetailHandler}>
            <div className={classes['card__image']}>
                <LazyLoadImage src={image} alt={subtitle} width='282' height='208' />
            </div>
            <div className={classes['card__body']}>
                <h4>{title}</h4>
                <p>{date}</p>
                <br/>
                <p>{subtitle}</p>
            </div>
        </div>
    );
};

export default BlogCard;
