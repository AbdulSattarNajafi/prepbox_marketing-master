import Slider from './../Slider';

import classes from './HowWork.module.css';

const HowWork = () => {
    return (
        <section className={classes.section}>
            <div className='container'>
                <div className={classes['section__content']}>
                    <h2>
                        How does <span className='text-blue'>PrepBox Pro</span> work?
                    </h2>
                    <div className={classes['section__content-bg']}></div>

                    <div className={classes['section__slider']}>
                        <Slider />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWork;
