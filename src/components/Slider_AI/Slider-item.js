import { LazyLoadImage } from 'react-lazy-load-image-component';

import classes from './Slider-item.module.css';

const SliderItem = ({ label, title, text, image }) => {
    return (
        <div className={classes.slide}>
            <div className={classes['slide__text']}>
                <div className={classes['slide__text-title']}>
                    <div className={classes['slide__text-label']}>{label}</div>
                    <h3>{title}</h3>
                </div>
                <p>{text}</p>
            </div>
            <div className={classes['slide__image']}>
                <LazyLoadImage src={image} width='450' height='383' alt={title} />
            </div>
            <div className={classes['slide__placeholder']}></div>
        </div>
    );
};

export default SliderItem;
