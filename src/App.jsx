import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Program from './Components/Programs/Program';
import Title from './Components/Title/Title';
import About from './Components/About/About';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Title subTitle='Our Program' title='What We Offer'/>
      <Program/>
      <About/>
    </div>
  );
};

export default App;