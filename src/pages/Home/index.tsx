import ServiceSection from '../Home/components/Services/index.tsx';
import Companies from '../Home/components/Companies/index.tsx';
import SwiperTemp from '../Home/components/Swiper/index.tsx';

const Home = () => {
    return (
        <>
            <SwiperTemp />
            <Companies />
            <ServiceSection />
        </>
    );
};

export default Home;
