import Hero from '../components/Tutorless/Hero';
import Additions from '../components/Tutorless/Additions';
import Form from '../components/Tutorless/Form';
import Comparison from '../components/Tutorless/Comparison';
import Admission from '../components/Tutorless/Admission';
import ProductDemo from '../components/Tutorless/Product-demo'
import GradeShock from '../components/Tutorless/Grade-shock';
import Flight from '../components/Tutorless/Flight';
import Soar from '../components/home/Soar';
import HowWork from '../components/Tutorless/HowWork';

import Support from '../components/Tutorless/Support';
import FaqSection from '../components/Tutorless/Faq';

const Tutorless = () => {
    return (
        <>
            <Hero />
            <Additions />
            <Form />
            <ProductDemo />
            <Comparison />
            <Flight />
            <GradeShock />
            <Soar />
            <HowWork />            
            <Support />
            <Admission />
            <FaqSection />
        </>
    );
};

export default Tutorless;
