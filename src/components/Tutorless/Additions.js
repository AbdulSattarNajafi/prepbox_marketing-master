import AdditionItem from '../elements/addition-item';
import classes from './Additions.module.css';

const Additions = () => {
    return (
        <section className={classes.additions}>
            <div className='container'>
                <div className={classes['additions__grid']}>
                    <AdditionItem text='Curriculum matched for G6 - G12' />
                    <AdditionItem text='Real-time marking' />
                    <AdditionItem text='Detailed progress reports' />
                </div>
            </div>
        </section>
    );
};

export default Additions;
