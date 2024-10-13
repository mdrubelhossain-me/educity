import React, { useRef } from 'react';
import './Testimonial.css'
import './TestimonialResponsive.css'

import next_btn from '../../assets/images/next-icon.png'
import back_btn from '../../assets/images/back-icon.png'
import user_1 from '../../assets/images/user-1.png'
import user_2 from '../../assets/images/user-2.png'
import user_3 from '../../assets/images/user-3.png'
import user_4 from '../../assets/images/user-4.png'


const Testimonial = () => {

    const slider =useRef();
    let tx = 0;


    const slideForward = () =>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


    
    return (
        <div className="container" id='testimonial'>
            <div className='testimonial'>
            <img src={next_btn} className='next-btn' onClick={slideForward} alt="" />
            <img src={back_btn} className='back-btn' onClick={slideBackward} alt="" />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>EduCity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellendus eveniet eius modi recusandae fugiat at expedita, assumenda culpa laboriosam voluptatibus asperiores perspiciatis placeat et.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>EduCity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellendus eveniet eius modi recusandae fugiat at expedita, assumenda culpa laboriosam voluptatibus asperiores perspiciatis placeat et.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>EduCity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellendus eveniet eius modi recusandae fugiat at expedita, assumenda culpa laboriosam voluptatibus asperiores perspiciatis placeat et.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>EduCity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellendus eveniet eius modi recusandae fugiat at expedita, assumenda culpa laboriosam voluptatibus asperiores perspiciatis placeat et.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default Testimonial;