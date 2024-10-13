import React from 'react';
import './Contact.css'
import './ContactResponsive.css'
import main_icon from '../../assets/images/mail-icon.png'
import phone_icon from '../../assets/images/phone-icon.png'
import location_icon from '../../assets/images/location-icon.png'


const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "20e06d65-d116-44ef-ae4e-75916a0f7869");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


    return (
        <div className='container contact' id='contact'>
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
                <form action="" onSubmit={onSubmit}>
                    <label htmlFor="name">Enter Your Name</label>
                    <input type="text" name='name' id='name' placeholder='Name' required />
                    <label htmlFor="phone">Enter Your Phone</label>
                    <input type="text" name='phone' id='phone' placeholder='Phone' required />
                    <label htmlFor="details">Details</label>
                    <textarea name="details" id="details" rows={8} placeholder='Details' required></textarea>
                    <button type='submit' className='btn'>Send Now</button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;