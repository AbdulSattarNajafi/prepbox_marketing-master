import PricingCard from '../elements/comparison-card';
import ComparisonImg1 from './../../assets/images/png/comparison_1.png';
import ComparisonImg2 from './../../assets/images/png/comparison_2.png';

import classes from './Comparison.module.css';


const Comparison = () => {
    return (
        <section className={classes.section} id='pricing'>
            <div className={classes.container}>
                <p className={classes.opener_text}>
                Begin your <span className='text-blue'>AI-assited math practice</span> for FREE today
                </p>

                <div className={classes.content}>
                    <PricingCard
                        title='Workbooks'
                        background="grey"
                        sessions='One 2-hour sessions per week.'
                        price='$200/mo'
                        image={ComparisonImg1}
                        limits={1}
                        active={true}
                        linkTo='https://calendly.com/d/hw9-7wv-n3y/assessment?month=2023-04'
                    />
                    <PricingCard
                        title='PrepBox A.I.'
                        sessions='Two 2-hour sessions per week.'
                        price='$350/mo'
                        image={ComparisonImg2}
                        limits={4}
                        active={false}
                        linkTo='https://calendly.com/d/hw9-7wv-n3y/assessment?month=2023-04'
                    />
                </div>
                
            </div>
        </section>
    );
};

export default Comparison;