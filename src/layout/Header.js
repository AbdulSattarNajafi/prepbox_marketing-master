import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from './../assets/icons/logo.svg';
import { ReactComponent as ArrowDown } from './../assets/icons/arrow-down.svg';
import classes from './Header.module.css';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isSmallHeader, setIsSmallHeader] = useState(false);

    const togglerMenuHandler = () => {
        setShowMenu((prevState) => !prevState);
    };

    const hideMenu = () => {
        setShowMenu(false);
    };

    const visitHomePage = () => {
        setShowMenu(false);

        setTimeout(() => {
            const plansSection = document.getElementById('plans');

            plansSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            });
        }, 600);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => setIsSmallHeader(window.pageYOffset > 80));
        }
    }, []);

    return (
        <>
            <header
                className={`${classes.header} ${isSmallHeader ? 'header-shadow' : '80px'}`}
                style={{ height: `${isSmallHeader ? '60px' : '80px'}` }}
            >
                <div className='container'>
                    <div className={classes.nav}>
                        <Link
                            to='/'
                            className={classes['header-logo']}
                            aria-label='Prepbox home page'
                        >
                            <Logo />
                        </Link>
                        <div
                            className={`${classes.menu} ${
                                showMenu ? `${classes['show-menu']}` : ''
                            }`}
                            style={{ top: `${isSmallHeader ? '60px' : '80px'}` }}
                        >
                            {/* ============ Header Dropdowns ============= */}
                            <ul className={classes.dropdown}>
                                <li className={classes['dropdown__item']}>
                                    <div className={classes['dropdown__item-button']}>
                                        <span>Products</span>
                                        <ArrowDown />
                                    </div>

                                    <div className={classes['dropdown-content']}>
                                        <ul className={classes['dropdown__list']}>
                                            <li
                                                className={classes['dropdown__list-item']}
                                                onClick={hideMenu}
                                            >
                                                <Link to='/'>PrepBox Pro (Homepage)</Link>
                                            </li>
                                            <li
                                                className={classes['dropdown__list-item']}
                                                onClick={hideMenu}
                                            >
                                                <Link to='/product/prepbox-ai'>PrepBox A.I.</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li className={classes['dropdown__item']}>
                                    <Link to='/tutor' onClick={hideMenu}>
                                        <div className={classes['dropdown__item-button']}>
                                            <span>About Us</span>
                                        {/* <ArrowDown /> */}
                                        </div>
                                    </Link>

                                    {/* <div className={classes['dropdown-content']}>
                                        <ul className={classes['dropdown__list']}>
                                            <li className={classes['dropdown__list-item']}>
                                                <Link to='/tutor' onClick={hideMenu}>
                                                    Our Tutors & Team
                                                </Link>
                                            </li>
                                            <li className={classes['dropdown__list-item']}>
                                                <Link to='/blog' onClick={hideMenu}>
                                                    Blog
                                                </Link>
                                            </li>
                                        </ul>
                                    </div> */}
                                </li>
                                <li className={classes['dropdown__item']}>
                                    <Link to='/blog' onClick={hideMenu}>
                                        <div className={classes['dropdown__item-button'] }>
                                            <span>Blog</span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>

                            {/* ============ Header Buttons ============= */}
                            <div className={classes['header__button']}>
                                <a
                                    href='https://prepboxconsultation.paperform.co/'
                                    className={classes['header__button-try']}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    Try PrepBox Pro
                                </a>
                            </div>
                        </div>

                        {/* ============ Mobile Menu Button ============= */}
                        <div className={classes['toggler-container']}>
                            <a
                                href='https://prepboxconsultation.paperform.co/'
                                className={`${classes['header__button-try']} ${classes['header__button-try-sm']}`}
                                target='_blank'
                                rel='noreferrer'
                            >
                                Try PrepBox Pro
                            </a>

                            <button
                                aria-label='Menu button'
                                className={`${classes.toggler} ${
                                    showMenu ? `${classes.open}` : ''
                                }`}
                                onClick={togglerMenuHandler}
                            >
                                <span className={classes['toggler__top']}></span>
                                <span className={classes['toggler__middle']}></span>
                                <span className={classes['toggler__bottom']}></span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div
                className={`${classes.backdrop} ${showMenu ? `${classes['show-backdrop']}` : ''}`}
                onClick={togglerMenuHandler}
            ></div>
        </>
    );
};

export default Header;
