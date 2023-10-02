import classes from './plans-card.module.css';

const PlansCard = ({ label, title, price, duration, isActive }) => {
    return (
        <div className={`${classes.card} ${isActive ? 'active-plans-card' : ''}`}>
            <p className={classes['card__label']}>{label}</p>
            <h5>{title}</h5>
            <p className={classes['card__weekly']}>{duration}</p>
            <p className={classes['card__weekly']}>per week</p>
            <h4 className={classes['price']}>{price}</h4>
        </div>
    );
};

export default PlansCard;
