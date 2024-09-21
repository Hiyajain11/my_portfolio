import React from 'react';
import './Progress.css';

const Progress=()=> {
  return (
    <section className='experience-section' id='about'>
<div className="container">
    <div className="section-title">
        <p>Why Choose Me</p>
        <h2>My experience Area</h2>
    </div>
    <div className="experience-items">
        <div className="experience-item">
            <div className="experience-info">
                <p>HTML</p>
                <p>90%</p>
            </div>
            <div className="progress-line" data-percent="90%">
                <span style={{width:"90%"}}></span>
            </div>
        </div>
        <div className="experience-item">
            <div className="experience-info">
                <p>CSS</p>
                <p>80%</p>
            </div>
            <div className="progress-line" data-percent="80%">
                <span style={{width:"80%"}}></span>
            </div>
        </div>
        <div className="experience-item">
            <div className="experience-info">
                <p>Java Script</p>
                <p>75%</p>
            </div>
            <div className="progress-line" data-percent="75%">
                <span style={{width:"75%"}}></span>
            </div>
        </div>
        <div className="experience-item">
            <div className="experience-info">
                <p>React Js</p>
                <p>75%</p>
            </div>
            <div className="progress-line" data-percent="75%">
                <span style={{width:"75%"}}></span>
            </div>
        </div>
        <div className="experience-item">
            <div className="experience-info">
                <p>Node Js</p>
                <p>60%</p>
            </div>
            <div className="progress-line" data-percent="60%">
                <span style={{width:"60%"}}></span>
            </div>
        </div>
        <div className="experience-item">
            <div className="experience-info">
                <p>Express Js</p>
                <p>60%</p>
            </div>
            <div className="progress-line" data-percent="60%">
                <span style={{width:"60%"}}></span>
            </div>
        </div>
        
    </div>
</div>
    </section>

  );
}

export default Progress;
