import GlobalStyles from './styles/GlobalStyles';
import { Layout } from './layouts/Layout';
import Header from './components/header/Header.tsx';
import Nav from './components/nav/Nav.tsx';
import Companies from './components/companies/Companies.tsx';
import ServiceSection from './components/serviceSection/ServiceSection.tsx';
import SwiperTemp from './components/swiper/SwiperTemp.tsx';

function App() {
    return (
        <>
            <GlobalStyles />
            <Layout>
                <Header />
                <Nav />
                {/*<SwiperSection />*/}
                <SwiperTemp />
                <Companies />
                <ServiceSection />
            </Layout>
        </>
    );
}

export default App;
