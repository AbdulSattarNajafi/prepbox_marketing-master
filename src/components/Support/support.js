import SupportForm from '../elements/form-support';
import React from 'react';
import classes from './support.module.css';


const SupportHelp = () => {
    return (
        <section className={classes.session}>
            <div className='container'>
                <div className={classes.sessionHeader}>
                    <h2>Have questions?</h2>
                    <p>Reach out to us!</p>
                </div>
            </div>
            <div className='container'>
                <SupportForm/>
            </div>
        </section>
    );
};

export default SupportHelp;
