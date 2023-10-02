import { ReactComponent as Icon } from './../../assets/icons/pricing-icon.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import classes from './comparison-card.module.css';

const ComparisonCard = ({ title, sessions, price, image,limits, active, linkTo }) => {
    return (
        <div className={`${classes.card} ${active ? `${classes.active}` : ''}`}>
            <div className={classes['card__content']}>
                <h4 className={classes['card__content-title']}>{title}</h4>
                {/* <p className={classes['card__content-session']}>{sessions}</p> */}
                {/* <h4 className={classes['card__content-price']}>{price}</h4> */}
                <LazyLoadImage 
                    className={classes['card__content-image']}
                    src={image}
                />
                <ul className={classes['card__list']}>
                    <li className={classes['card__list-item']}>
                        <Icon className={`${limits < 1 ? `${classes.blur}` : ''}`} />
                        <span>Questions and solutions</span>
                    </li>
                    <li className={`${limits < 4 ? `${classes.blur}` : ''}`}>
                        <Icon />
                        <span>AI-recommended lecture videos</span>
                    </li>
                    <li className={`${limits < 3 ? `${classes.blur}` : ''}`}>
                        <Icon />
                        <span>Real-time grading & review</span>
                    </li>
                    <li
                        className={`${limits < 4 ? `${classes.blur}` : ''} ${
                            limits === 1 ? `${classes.blur}` : ''
                        }`}
                    >
                        <Icon />
                        <span>Progress reports</span>
                    </li>
                    <li
                        className={`${limits < 4 ? `${classes.blur}` : ''} ${
                            limits === 1 ? `${classes.blur}` : ''
                        }`}
                    >
                        <Icon />
                        <span>FREE </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ComparisonCard;