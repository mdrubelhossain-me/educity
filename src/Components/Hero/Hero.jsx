import React from 'react';
import './Hero.css'
import './HeroResponsive.css'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore atque ea quod perferendis error eaque voluptates aliquam rerum</p>
                <button className='btn'>Explore More	&rarr;</button>
            </div>
        </div>
    );
};

export default Hero;