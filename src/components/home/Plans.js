import PlansCard from '../elements/plans-card';
import PrimaryButton from '../button/Primary-button';

import classes from './Plans.module.css';

const Plans = () => {
    return (
        <section className={classes.plans} id='plans'>
            <div className='container'>
                <div className={classes['plans-title']}>
                    <h2>Our Plans</h2>
                    <p>
                        PrepBox Junior is available only to students in grade 5-8 up to Algebra 1
                    </p>
                </div>
                <div className={classes['plans-grid']}>
                    <PlansCard 
                        label='Junior' 
                        title='Unlimited'
                        duration='1hr sessions' 
                        isActive={true} 
                        price='$200/mo' 
                    />
                    <PlansCard 
                        label='Basic' 
                        title='One' 
                        duration='2hr session'
                        isActive={false} 
                        price='$200/mo' 
                    />
                    <PlansCard
                        label='Accelerated'
                        title='Two'
                        duration='2hr sessions'
                        isActive={false}
                        price='$350/mo'
                    />
                    <PlansCard
                        label='Light Speed'
                        title='Unlimited'
                        duration='2hr sessions'
                        isActive={false}
                        price='$450/mo'
                    />
                </div>
                <div className={classes['plans-button']}>
                    <PrimaryButton text='Try for free' />
                </div>
            </div>
        </section>
    );
};

export default Plans;
