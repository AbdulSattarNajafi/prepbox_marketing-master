import { LazyLoadImage } from 'react-lazy-load-image-component';

import Georgetown from './../../assets/images/png/georgetown.png';
import Harvard from './../../assets/images/png/harvard.png';
import Northwestern from './../../assets/images/png/northwestern.png';
import Toronto from './../../assets/images/png/toronto.png';
import Waterloo from './../../assets/images/png/waterloo.png';

import classes from './Admission.module.css';

const Admission = () => {
    return (
        <section>
            <div className='container'>
                <div>
                    <p className={classes['admission-text']}>
                        Our students received admissions from:
                    </p>

                    <ul className={classes['admission__universities']}>
                        <li>
                            <LazyLoadImage
                                src={Georgetown}
                                width='135'
                                height='40'
                                alt='Georgetown University'
                            />
                        </li>
                        <li>
                            <LazyLoadImage
                                src={Harvard}
                                width='135'
                                height='40'
                                alt='Harvard University'
                            />
                        </li>
                        <li>
                            <LazyLoadImage
                                src={Northwestern}
                                width='135'
                                height='40'
                                alt='Northwestern University'
                            />
                        </li>
                        <li>
                            <LazyLoadImage
                                src={Toronto}
                                width='135'
                                height='40'
                                alt='Toronto University'
                            />
                        </li>
                        <li>
                            <LazyLoadImage
                                src={Waterloo}
                                width='135'
                                height='40'
                                alt='Waterloo University'
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Admission;
