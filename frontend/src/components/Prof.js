import React from 'react';
import './Prof.css';
import Profu from './images/Prof.png';
import linkedgrey from './images/linkedgrey.png';
import Linkedin from './images/Linkedin.png';
import Email from './images/Email.png';
import phone from './images/phone.png';

function Prof() {
  return (
    <div className='body'>
        <div className='lines-container'>
        <div className='line'></div>
        {/* Adjust the width as per your desired space */}
        <div className='line'></div>
      </div>
      <p className='phd-text2'>Professor</p>
      <div className='lines-container'>
     <div className='line'></div>
   </div>
      <div className='gridd'>
        <div className='coli'>
          <a href="prof">
        <div className='img2'>
        <img src={Profu} alt='Card Image' />
              
            </div>
            <div className='card-content'>
            <h3>Name</h3>
            <p>
            <img src={Email} alt="mail" className='cardicon'/>:  dibakar@iisc.ac.in 
            </p>
            <p>
            <img src={phone} alt="ph" className='cardicon'/>:   +91 80 2293 3230 
            </p>
            
             </div>
             </a>

             <h3 className='cardicon'> Courses:</h3> <br/> 
             <p className='det'>
                <br/>

Applied Ergonomics (PD-231) <br/>Mechanism Design (PD-235) <br/>Geometric Modeling for CAD (ME-294)</p>
<a href="https://www.linkedin.com/in/dibakar-sen-9387b534/">
             <img src={Linkedin} alt="" className="linked-image"/>
             </a>


         
         

             </div> 
             <div className='coli'>

             </div>
               </div>
    </div>
  )
}

export default Prof