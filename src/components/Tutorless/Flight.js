import { LazyLoadImage } from 'react-lazy-load-image-component';

import TutorsAreaImage from './../../assets/images/png/stem.png';
import classes from './Flight.module.css';

const Flight = () => {
    return (
        <section className={classes.tutors}>
            <div className='container'>
                <div className={classes['tutors-content']}>
                    <div className={classes['tutors__image']}>
                        <LazyLoadImage src={TutorsAreaImage} width='490' height='382' alt='Math' />
                    </div>
                    <div className={classes['tutors__text']}>
                        <h2 className='secondary-title'>
                            Finally, an A.I. program for STEM success
                        </h2>
{/* 
                        <ul className={classes['tutors__list']}>
                            <li>are experienced and vetted </li>
                            <li>can teach your curriculum</li>
                            <li>graduated from your dream universities?</li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Flight;
