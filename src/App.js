import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // React Router v6+
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import GetInTouch from './components/GetInTouch/GetInTouch';
import ContactLandingPage from './components/ContactLandingPage/ContactLandingPage';
import Collection from './components/Collection/Collection';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import Services from './Pages/Services/Services'; 
import './App.scss';
import ServicesLandingPage from './components/ServicesLandingPage/ServicesLandingPage';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="App">
        <Header />
        <Routes>
          {/* Home page route */}
          <Route path="/" element={
            <div>
              <Hero />
              <ServicesLandingPage />
              <Collection />
              <ContactLandingPage />
              <GetInTouch />
            </div>
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          {/* You can add more routes as needed */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
