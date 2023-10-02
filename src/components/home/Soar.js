import classes from './Soar.module.css';

const Soar = () => {
    return (
        <section className={classes.soar}>
            <div className='container'>
                <div className={classes['soar-content']}>
                    <h2 className='secondary-title'>Soar with PrepBox</h2>
                    <p>
                        Prepbox’s unique combination of AI + personalized connection will strengthen
                        your understanding of mathematics at the speed of your own learning so you
                        can improve your math test scores in high-school and excel in university
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Soar;
