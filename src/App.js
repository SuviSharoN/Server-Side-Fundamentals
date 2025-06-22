import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Concepts from './components/Concepts';
import UseCase from './components/UseCase';
import WhyItMatters from './components/WhyItMatters';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Concepts />
      <UseCase />
      <WhyItMatters />
      <Footer />
    </div>
  );
}

export default App;
