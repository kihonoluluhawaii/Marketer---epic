import ServiceSection from '../Home/components/Services/index.tsx';
import Companies from '../Home/components/Companies/index.tsx';
import MainSwiper from './components/MainSwiper/index.tsx';
import Projects from './components/Projects';
import Insights from './components/Insights';
import Recommend from './components/Recommend';
import News from './components/News';
import Team from './components/Team';
import Process from './components/Process';
import SendEmail from './components/SendEmail';

const Home = () => {
    return (
        <>
            <MainSwiper />
            <Companies />
            <ServiceSection />
            <Projects />
            <Insights />
            <Recommend />
            <News />
            <Team />
            <Process />
            <SendEmail />
        </>
    );
};

export default Home;
