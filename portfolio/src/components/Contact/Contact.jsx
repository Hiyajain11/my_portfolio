import React, {useRef} from 'react';
import './Contact.css';
import phone from '../../assets/phone-call-icon.png';
import gmail from '../../assets/gmail-icon.png';
import linkedin from '../../assets/linkedin-app-icon.png';
import emailjs from '@emailjs/browser';


const Contact=()=> {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_xx3b2c9', 'template_dvo9ym3', form.current, {
            publicKey: 'mS2jMZtIN-3PQ2KqR',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email Sent !');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <section id="contactPage">
     
<div id="contact">
<h1 className="contactPageTitle">Contact Me</h1>
<span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
<form className="contactForm" ref={form} onSubmit={sendEmail}>
    <input type="text" className="name" placeholder='Your Name' name='your_name' />
    <input type="email" className="email" placeholder='Your Email' name='your_email' />
    <textarea name="message" className='msg' rows='5' placeholder='Your message'></textarea>
    <button type='submit' value='Send' className="submitBtn">Submit</button>
    <div className="links">
        <div className='handles'><img src={phone} alt="" className="link" />
        <p >+91 9119243107</p></div>
        <div className='handles'><img src={gmail} alt="" className="link" />
        <p>hiyapatni11@gmail.com</p></div>
        <div className='handles'><img src={linkedin} alt="" className="link" />
        <p>linkedin.com/in/hiyajain11/</p></div>
        
    </div>
</form>
</div>
    </section>
  );
}

export default Contact;
