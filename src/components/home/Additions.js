import AdditionItem from '../elements/addition-item';
import classes from './Additions.module.css';

const Additions = () => {
    return (
        <section className={classes.additions}>
            <div className='container'>
                <div className={classes['additions__grid']}>
                    <AdditionItem text='Courses fitted to your syllabus to get As' />
                    <AdditionItem text='The right amount of accountability & support' />
                    <AdditionItem text='Secure your chances of your dream university' />
                </div>
            </div>
        </section>
    );
};

export default Additions;
