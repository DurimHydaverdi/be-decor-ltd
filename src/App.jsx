import React from 'react';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import GetInTouch from './components/GetInTouch/GetInTouch';
import Aesthetic from './components/Aesthetic/Aesthetic';
import AboutLandingPage from './components/AboutLandingPage/AboutLandingPage';
import Collection from './components/Collection/Collection';
import '../src/App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Hero />
        {/* <Aesthetic /> */}
        <Collection />
        <AboutLandingPage />
        <GetInTouch />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
