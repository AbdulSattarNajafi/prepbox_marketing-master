import { LazyLoadImage } from 'react-lazy-load-image-component';

import Instagram from './../assets/icons/instagram.png';
import Youtube from './../assets/icons/youtube.png';
import Linkedin from './../assets/icons/linkedin.png';

import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className='container'>
                <div className={classes['footer-content']}>
                    <div className={classes['footer__copyright']}>
                        <h5>Your personal math coach</h5>
                        <p>
                            &copy; {new Date().getFullYear()} - PrepAnywhere Inc. All Right
                            Reserved. 8 Heintzman Cres., Maple, ON, Canada
                        </p>
                    </div>

                    <div className={classes['footer__social']}>
                        <ul className={classes['footer__social-list']}>
                            <li>
                                <a
                                    href='https://www.instagram.com/prepboxmath'
                                    target='_blank'
                                    rel='noreferrer'
                                    aria-label='Prepbox Instagram Page'
                                >
                                    <LazyLoadImage
                                        src={Instagram}
                                        width='24'
                                        height='25'
                                        alt='Instagram Logo'
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://www.youtube.com/watch?v=ih3hNg5Y-4c'
                                    target='_blank'
                                    rel='noreferrer'
                                    aria-label='Prepbox Youtube Chanel'
                                >
                                    <LazyLoadImage
                                        src={Youtube}
                                        width='35'
                                        height='24'
                                        alt='Youtube Logo'
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://www.linkedin.com/company/prepboxmath'
                                    target='_blank'
                                    rel='noreferrer'
                                    aria-label='Prepbox on Linkedin'
                                >
                                    <LazyLoadImage
                                        src={Linkedin}
                                        width='24'
                                        height='23'
                                        alt='Youtube Logo'
                                    />
                                </a>
                            </li>
                        </ul>

                        <div className={classes['footer__links']}>
                            <a
                                href='/privacy-policy/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Privacy Policy
                            </a>
                            <a
                                href='/terms-of-use/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Terms & Conditions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
