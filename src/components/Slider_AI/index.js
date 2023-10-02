import Slider from 'react-slick';
import SliderItem from './Slider-item';

import SliderImg1 from './../../assets/images/png/slider-1.png';
import SliderImg2 from './../../assets/images/png/slider-2.png';
import SliderImg3 from './../../assets/images/png/slider-3.png';
// import SliderImg4 from './../../assets/images/png/slider-4.png';
import SliderImg5 from './../../assets/images/png/slider-5.png';
import SliderImg6 from './../../assets/images/png/slider-6.png';
import SliderImg7 from './../../assets/images/png/slider-91.png';
import SliderImg8 from './../../assets/images/png/slider-92.png';
import SliderImg9 from './../../assets/images/png/slider-93.png';

const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <>
            <Slider {...settings}>
                <SliderItem
                    label='1'
                    title='Sign up for account'
                    text='Fill in the short form below to get your free account!'
                    image={SliderImg1}
                />
                
                <SliderItem
                    label='2'
                    title='Receive coursework'
                    text='We email you with the login details and instructions to start'
                    image={SliderImg7}
                />

                <SliderItem
                    label='3'
                    title='Download PrepBox'
                    text='Download our app from the Apple App Store on your iPad.'
                    image={SliderImg2}
                />

                <SliderItem
                    label='4'
                    title='Begin solving'
                    text='Solve questions on our whiteboard'
                    image={SliderImg3}
                />

                <SliderItem
                    label='5'
                    title='Submit, and get marked'
                    text='Our AI immediately grades and reveals solution videos'
                    image={SliderImg8}
                />
                <SliderItem
                    label='6'
                    title='Review and master'
                    text='After watching the solutions, generate similar questions of the ones you got wrong until you master the subject.'
                    image={SliderImg6}
                />
                <SliderItem
                    label='7'
                    title='Receive reports'
                    text='After questions are submitted, progress reports are automatically generated and sent to you.'
                    image={SliderImg6}
                />
            </Slider>
        </>
    );
};

export default SliderComponent;
