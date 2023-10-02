import { LazyLoadImage } from 'react-lazy-load-image-component';

import GradeImage1 from './../../assets/images/png/grade-1.png';
import GradeImage2 from './../../assets/images/png/grade-2.png';
import classes from './Grade-shock.module.css';

const GradeShock = () => {
    return (
        <section className={classes.grade}>
            <div className='container'>
                <div className={classes['grade-content']}>
                    <div className={classes['grade__text']}>
                        <h2 className='secondary-title'>We inspire focus</h2>
                        <p>
                            No more wasteful screentime! See your child's math improve with daily practice
                        </p>
                    </div>
                    <div className={classes['grade__image']}>
                        <div className={classes['grade__image-img']}>
                            <LazyLoadImage src={GradeImage1} width='371' height='274' alt='Grade' />
                        </div>
                        <div className={classes['grade__image-img']}>
                            <LazyLoadImage src={GradeImage2} width='233' height='284' alt='Grade' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GradeShock;
