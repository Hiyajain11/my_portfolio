import React, { useState } from 'react';
import './Navbar.css';
import HJ from '../assets/HJ.png';
import contactImg from '../assets/contact.png';
import {Link} from 'react-scroll';
import menu from '../assets/menu.png';
const navbar=()=> {
  const [showMenu,setShowMenu]=useState(false);
  return (
      <nav className="navbar">
<img src={HJ} alt="Logo" className='logo' />
<div className="desktopMenu">
<Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
<Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
<Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Skills</Link>
<Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Certificates</Link>

</div>
<button className="desktopMenuBtn" onClick={()=>{
  document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
}}>
  <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me
</button>

<img src={menu} alt="menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
<div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
<Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
<Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
<Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link>
<Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Certificates</Link>
<Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
</div>
      </nav>
    
  );
}

export default navbar;
