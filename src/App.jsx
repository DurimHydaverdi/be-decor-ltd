import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
// import Features from './components/Features';
// import Gallery from './components/Gallery';
// import Contact from './components/Contact';
import Footer from './components/Footer/Footer';
import '../src/App.scss'
import GetInTouch from './components/GetInTouch/GetInTouch';
import Aesthetic from './components/Aesthetic/Aesthetic';
import AboutLandingPage from './components/AboutLandingPage/AboutLandingPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Aesthetic />
      <AboutLandingPage />
      {/* <Features /> */}
      {/* <Gallery /> */}
      {/* <Contact /> */}
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
