import { useNavigate } from 'react-router-dom';
import classes from './thankyou.module.css';

const Thank = () => {
    const navigate = useNavigate();
    const visitHomePage = () => navigate('/product/prepbox-ai', { replace: true });

    return (
        <section className={classes.thankyou}>
            <div className='container'>
                <div className={classes['thankyou__content']}>
                    <h1>Thank you!</h1>
                    <h2 className='text-blue'>We have received your free trial request</h2>
                    <p>
                        We will send you an email with the login details of the account within 48 hours
                    </p>
                    <button onClick={visitHomePage} aria-label='Home page'>
                        Go back
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Thank;
