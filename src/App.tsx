import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/navbar';
import { Footer } from './components/footer';
import { Content } from './components/content';

function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Content />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
