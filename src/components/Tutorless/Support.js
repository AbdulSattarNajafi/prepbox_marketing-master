import { LazyLoadImage } from 'react-lazy-load-image-component';

import Lgcse from './../../assets/images/png/lgcse.png';
import IBLogo from './../../assets/images/png/ib.png';
import APLogo from './../../assets/images/png/ap.png';

import classes from './Support.module.css';

const Support = () => {
    return (
        <section className={classes.support}>
            <div className='container'>
                <div className={classes['support-content']}>
                    <h2>Syllabuses We Support</h2>
                    <div className={classes['support__text-wrapper']}>
                        <div className={classes['support__text']}>
                            <p>
                                We offer a variety of math tutoring that fits our students
                                curriculum, from regular common core classes to advance
                                placement programs exams.
                                <br/>
                                <br/>
                                PrepBox A.I. is well trained on US Common Core and Canadian math
                            </p>
                            {/* <PrimaryButton text='Try for free' /> */}
                        </div>

                        <div className={classes['support__logo']}>
                            <div className={classes['support__logo-item']}>
                                <LazyLoadImage
                                    src={Lgcse}
                                    width='151'
                                    height='151'
                                    alt='LGCSE logo'
                                />
                            </div>
                            <div className={classes['support__logo-item']}>
                                <LazyLoadImage
                                    src={IBLogo}
                                    width='173'
                                    height='171'
                                    alt='IB logo'
                                />
                            </div>
                            <div className={classes['support__logo-item']}>
                                <LazyLoadImage
                                    src={APLogo}
                                    width='350'
                                    height='111'
                                    alt='AP logo'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Support;
