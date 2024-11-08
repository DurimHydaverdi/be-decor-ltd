import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // React Router v6+
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import GetInTouch from './components/GetInTouch/GetInTouch';
// import Aesthetic from './components/Aesthetic/Aesthetic';
import AboutLandingPage from './components/AboutLandingPage/AboutLandingPage';
import Collection from './components/Collection/Collection';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import Services from './Pages/Services/Services'; 
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Home page route */}
          <Route path="/" element={
            <div>
              <Hero />
              <Collection />
              <AboutLandingPage />
              <GetInTouch />
            </div>
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/collection" element={<Collection />} /> */}
          {/* <Route path="/get-in-touch" element={<GetInTouch />} /> */}
          {/* <Route path="/aesthetic" element={<Aesthetic />} /> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
