import ServiceSection from '../Home/components/Services/index.tsx';
import Companies from '../Home/components/Companies/index.tsx';
import MainSwiper from './components/MainSwiper/index.tsx';
import Projects from './components/Projects';
import Insights from './components/Insights';

const Home = () => {
    return (
        <>
            <MainSwiper />
            <Companies />
            <ServiceSection />
            <Projects />
            <Insights />
        </>
    );
};

export default Home;
