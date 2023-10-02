import Hero from '../components/home/Hero';
import Admission from '../components/home/Admission';
import HowWork from '../components/home/HowWork';
import ProductDemo from '../components/home/Product-demo';
import Support from '../components/home/Support';
import Plans from '../components/home/Plans';
import Session from '../components/home/Session';
import FaqSection from '../components/home/Faq';

const Home = () => {
    return (
        <>
            <Hero />
            <Admission />
            <HowWork />
            <ProductDemo />
            <Support />
            <Plans />
            <Session />
            <FaqSection />
        </>
    );
};

export default Home;
