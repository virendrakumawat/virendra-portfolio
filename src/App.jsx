import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
 

  return (
    <>
    <Cursor />
    <Navbar/>
    <Home/>
    <Footer/>
   </>
    
  );
};

export default App;
