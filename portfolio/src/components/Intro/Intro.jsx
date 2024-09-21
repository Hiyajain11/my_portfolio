import React, { useState, useEffect } from 'react';
import './Intro.css';
import bg from '../../assets/coat.jpg';
import bg1 from '../../assets/formal.jpg';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';

function Intro() {
  const images = [bg, bg1];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <section id="intro">
      <div className="introContent">
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className="introName">Hiya Jain</span><br />Web Designer</span>
        <p className="introPara">
          I'm a passionate web designer with a keen eye for detail and a love for creating beautiful, <br /> user
          friendly interfaces.
        </p>
        <Link to="contact" smooth={true} duration={500}>
          <button className="btn">
            <img src={btnImg} alt="Hire" className='btnImg' />Hire Me
          </button>
        </Link>
      </div>
      <img src={images[currentImageIndex]} alt="Profile" className='bg' />
    </section>
  );
}

export default Intro;

