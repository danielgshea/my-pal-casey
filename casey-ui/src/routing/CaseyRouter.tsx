import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import News from '../pages/news/News';
import Sports from '../pages/sports/Sports';
import Chat from '../pages/Chat';
import NFL from '../pages/sports/leagues/NFL';

const CaseyRouter = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/news/" element={<News />} />
                    <Route path="/sports/" element={<Sports />} />
                    <Route path="/sports/nfl" element={<NFL />} />
                    <Route path="/chat" element={<Chat />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default CaseyRouter;