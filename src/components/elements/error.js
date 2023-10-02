import { useNavigate } from 'react-router-dom';
import classes from './error.module.css';

const Error = () => {
    const navigate = useNavigate();
    const visitHomePage = () => navigate('/', { replace: true });

    return (
        <section className={classes.error}>
            <div className='container'>
                <div className={classes['error__content']}>
                    <h1>Oops!</h1>
                    <h2 className='text-blue'>404 - Page not Found</h2>
                    <p>
                        The page you are looking for might have been removed, had it's name changed
                        or is temporary unavailable.
                    </p>
                    <button onClick={visitHomePage} aria-label='Home page'>
                        Go to Home page
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Error;
