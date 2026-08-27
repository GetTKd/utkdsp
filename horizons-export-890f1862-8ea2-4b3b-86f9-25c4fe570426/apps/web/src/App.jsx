import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BrothersPage from './pages/BrothersPage';
import ProfessionalPage from './pages/ProfessionalPage';
import ServicePage from './pages/ServicePage';
import RecruitmentPage from './pages/RecruitmentPage';
import AlumniPage from './pages/AlumniPage';
import ContactPage from './pages/ContactPage';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/brothers" element={<BrothersPage />} />
                    <Route path="/professional" element={<ProfessionalPage />} />
                    <Route path="/service" element={<ServicePage />} />
                    <Route path="/recruitment" element={<RecruitmentPage />} />
                    <Route path="/alumni" element={<AlumniPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
