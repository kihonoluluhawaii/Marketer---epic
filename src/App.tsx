import GlobalStyles from './styles/GlobalStyles';
import { Layout } from './layouts/Layout';
import Header from './components/header/Header.tsx';
import Nav from './components/nav/Nav.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
    return (
        <>
            <GlobalStyles />
            <Router>
                <Layout>
                    <Header />
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/*<Route path="/" element={<Pages />} />*/}
                        {/*<Route path="/" element={<Case Studies />} />*/}
                        {/*<Route path="/" element={<Blog />} />*/}
                        {/*<Route path="/" element={<Contact />} />*/}
                    </Routes>
                </Layout>
            </Router>
        </>
    );
}

export default App;
