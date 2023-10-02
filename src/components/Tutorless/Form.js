import NameForm from '../elements/form';
import React from 'react';
import classes from './Form.module.css';


const Form = () => {
    return (
        <section className={classes.session}>
            <div className='container'>
                <div className={classes.sessionHeader}>
                    <h2>Have an iPad? PrepBox A.I. is FREE!</h2>
                    <p>Fill in the information below and we will email you your login details!</p>
                </div>
            </div>
            <div className='container'>
                <NameForm/>
            </div>
        </section>
    );
};

export default Form;
