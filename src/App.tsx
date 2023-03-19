import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import Header from './components/Header'
import Main from './pages/Main'
import Hero from './components/Hero';
import Features from './pages/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Header/> 
      <Main/> 
      <Hero />
      <Features/>
      <Footer /> 
    </div>
  );
}

export default App;
