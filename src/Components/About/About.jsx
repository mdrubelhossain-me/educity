import React from 'react';
import './About.css'
import './AboutResponsive.css'
import about_photo from '../../assets/images/about.png'
import play_icon from '../../assets/images/play-icon.png'

const About = () => {
    return (
        <div className='about container' id='about'>
            <div className="about-left-section">
                <img src={about_photo} className='about-photo' alt="About Image" />
                <img src={play_icon} className='play-icon' alt="" />
            </div>
            <div className="about-right-section">
                <h3>About University</h3>
                <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi molestiae voluptates ea ad fugiat voluptas culpa non soluta, aspernatur quia, dolorum quod! Hic, enim! Quo!
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, perferendis reprehenderit! Dolorem expedita pariatur nobis unde voluptates voluptatem ex id rerum! Unde ipsam quam consequatur?
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo blanditiis libero enim delectus, ea tempora temporibus dolore nobis laborum, eligendi facilis pariatur deserunt ipsum velit.
                
                </p>
                </p>
                </p>
            </div>
        </div>
    );
};

export default About;