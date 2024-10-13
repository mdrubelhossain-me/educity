import React from 'react';
import './Contact.css'
import './ContactResponsive.css'
import main_icon from '../../assets/images/mail-icon.png'
import phone_icon from '../../assets/images/phone-icon.png'
import location_icon from '../../assets/images/location-icon.png'


const Contact = () => {
    return (
        <div className='container contact'>
            <div className="contact-col">
                <h3>Send us a Message</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit obcaecati consequuntur quia odio est doloribus ut eius. Commodi harum doloribus ut similique consequatur assumenda inventore recusandae nostrum. Cupiditate, fuga blanditiis?</p>
                <ul>
                    <li><img src={main_icon} alt="" /> contact@gmail.com</li>
                    <li><img src={phone_icon} alt="" /> +11 123456</li>
                    <li><img src={location_icon} alt="" /> Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
            <div className="contact-col">
                <form action="">
                    <label htmlFor="name">Enter Your Name</label>
                    <input type="text" name='name' id='name' required />
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name='phone' id='phone' required />
                    <label htmlFor="details">Details</label>
                    <textarea name="details" id="details" rows={8} required></textarea>
                    <button type='submit' className='btn'>Send Now</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;