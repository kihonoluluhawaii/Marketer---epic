import ServiceSection from '../Home/components/Services/index.tsx';
import Companies from '../Home/components/Companies/index.tsx';
import SwiperTemp from '../Home/components/Swiper/index.tsx';
import Projects from './components/Projects';

const Home = () => {
    return (
        <>
            <SwiperTemp />
            <Companies />
            <ServiceSection />
            <Projects />
        </>
    );
};

export default Home;
