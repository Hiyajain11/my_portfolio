import React from 'react';
import './Skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

function Skills() {
  return (
    <section id="skills">
<span className='skillTitle'>What I do</span>
<span className='skillDesc'>
I'm a skilled designer with expertise in UI/UX, Web, and Graphic design. I create
intuitive and visually appealing designs that enhance user experience.
</span>
<div className="skillBars">
    <div className="skillBar">
        <img src={UIDesign} alt="UI" className="skillBarImg" />
        <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>UI/UX design aims to create visually appealing interfaces that enhance user satisfaction by improving usability, accessibility, and overall interaction experience through thoughtful design and user-centered principles.</p>
        </div>
    </div>
    <div className="skillBar">
        <img src={WebDesign} alt="Web" className="skillBarImg" />
        <div className="skillBarText">
            <h2>Website Design</h2>
            <p>Web design involves creating visually appealing and functional websites by integrating elements such as layout, typography, graphics, and navigation to enhance user experience and achieve specific business or communication goals. </p>
        </div>
    </div>
    <div className="skillBar">
        <img src={AppDesign} alt="App" className="skillBarImg" />
        <div className="skillBarText">
            <h2>Graphic Design</h2>
            <p>Graphic design involves creating visual content to communicate messages through typography, imagery, color, and layout techniques, aiming to convey information effectively and evoke specific emotions or responses from the audience.</p>
        </div>
    </div>
</div>
    </section>
  );
}

export default Skills;
