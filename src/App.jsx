import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Program from './Components/Programs/Program';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Title subTitle='Our Program' title='What We Offer'/>
      <Program/>
      <About/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Gallery/>
      <Title subTitle='Testimonial' title='What Student Says'/>
    </div>
  );
};

export default App;