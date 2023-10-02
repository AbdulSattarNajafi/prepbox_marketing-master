import { LazyLoadImage } from 'react-lazy-load-image-component';

import HeroImage from './../../assets/images/png/prepbox-ai-hero-lg.png';
import HeroImageMd from './../../assets/images/png/prepbox-ai-hero-md.png';
import HeroImageSm from './../../assets/images/png/prepbox-ai-hero-sm.png';
import HeroImageXs from './../../assets/images/png/prepbox-ai-hero-xs.png';

import classes from './Hero.module.css';

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className='container'>
                <div className={classes['hero__content']}>
                    <h1>
                        <span className='text-blue'>Practice daily</span> with A.I.
                    </h1>
                    <p>PrepBox A.I. gives you lectures, questions, and marks your work</p>
                    {/* <PrimaryButton text='Try for free' /> */}
                </div>
            </div>

            <div className={classes['hero__image']}>
                <LazyLoadImage
                    className={classes['hero__image-lg']}
                    src={HeroImage}
                    width='1120'
                    height='622'
                    alt='Banner'
                />
                <LazyLoadImage
                    className={classes['hero__image-md']}
                    src={HeroImageMd}
                    width='860'
                    height='593'
                    alt='Banner'
                />
                <LazyLoadImage
                    className={classes['hero__image-sm']}
                    src={HeroImageSm}
                    width='440'
                    height='550'
                    alt='Banner'
                />
                <LazyLoadImage
                    className={classes['hero__image-xs']}
                    src={HeroImageXs}
                    width='320'
                    height='582'
                    alt='Banner'
                />
            </div>
        </section>
    );
};

export default Hero;
