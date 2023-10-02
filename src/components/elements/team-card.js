import { LazyLoadImage } from 'react-lazy-load-image-component';

import classes from './team-card.module.css';

const TeamCard = ({ image, name, description, experience, almamater }) => {
    return (
        <div className={classes.card}>
            <div className={classes['card__image']}>
                <div className={classes['card__image-wrapper']}>
                    <LazyLoadImage src={image} alt={name} width='286' height='286' />
                </div>
            </div>
            <div className={classes['card__body']}>
                <h5>{name}</h5>
                <p>{description}</p>
                <p>Teaching Experience: {experience}</p>
                <p>Alma mater: {almamater}</p>
            </div>
        </div>
    );
};

export default TeamCard;
