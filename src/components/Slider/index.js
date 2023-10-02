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
                    title='Get assessed'
                    text='Schedule our free trial class to take your free assessment'
                    image={SliderImg1}
                />
                
                <SliderItem
                    label='2'
                    title='Receive coursework'
                    text='Assignments are personalized based on assessment results'
                    image={SliderImg7}
                />

                <SliderItem
                    label='3'
                    title='Watch core lectures'
                    text='Learn core concepts through our concise 1 to 4 minute lectures'
                    image={SliderImg2}
                />

                <SliderItem
                    label='4'
                    title='Begin solving'
                    text='Solve questions on our whiteboard while our tutors monitor progress'
                    image={SliderImg3}
                />


                <SliderItem
                    label='5'
                    title='Ask questions'
                    text='Click the hand button to send a screenshot of your whiteboard to your tutor'
                    image={SliderImg9}
                />

                <SliderItem
                    label='6'
                    title='Responses in minutes'
                    text='Our tutors respond in real-time with recorded explanations over the screenshot of the whiteboard'
                    image={SliderImg5}
                />

                <SliderItem
                    label='7'
                    title='Submit, and get marked'
                    text='Our AI immediately grades and reveals solution videos'
                    image={SliderImg8}
                />
        
                <SliderItem
                    label='8'
                    title='Review and master'
                    text='After watching the solutions, generate similar questions of the ones you got wrong until you master the subject.'
                    image={SliderImg6}
                />
            </Slider>
        </>
    );
};

export default SliderComponent;
