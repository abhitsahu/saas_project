import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/navbar';
import { Footer } from './components/footer';
import { Content } from './components/content';

function App() {
    return (
        <>
            <Router>
                <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Content />} />{' '}
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </>
    );
}

export default App;
