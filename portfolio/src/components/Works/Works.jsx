import React from 'react';
import './Works.css';
import Screenshot1 from '../../assets/Screenshot1.png';
import Screenshot2 from '../../assets/Screenshot2.png';
import Screenshot3 from '../../assets/Screenshot3.png';
import Screenshot4 from '../../assets/Screenshot4.png';
import Screenshot5 from '../../assets/Screenshot5.png';
import Screenshot6 from '../../assets/Screenshot6.png';
import Screenshot7 from '../../assets/Screenshot7.png';
import Screenshot8 from '../../assets/Screenshot8.png';
import Screenshot9 from '../../assets/Screenshot9.png';


function Works() {
  return (
    <section id='works'>
<h2 className="workstitle">My Certification</h2>
<span className='worksDesc'>
    I take pride in paying attention to the smallest details and
    crafting beautiful, user-friendly interfaces that provide
    seamless user experiences.
</span>
<div className="worksImgs">
    <img src={Screenshot1} alt="" className="worksImg" />
    <img src={Screenshot2} alt="" className="worksImg" />
    <img src={Screenshot3} alt="" className="worksImg" />
    <img src={Screenshot4} alt="" className="worksImg" />
    <img src={Screenshot7} alt="" className="worksImg" />
    <img src={Screenshot6} alt="" className="worksImg" />
</div>
<button className="worksBtn">See More</button>
    </section>
  );
}

export default Works;
