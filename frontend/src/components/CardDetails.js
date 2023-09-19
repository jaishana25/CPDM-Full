import React, { useState } from 'react';
import './CardDetails.css';
import Profu from './images/Prof.png';
import linkedgrey from './images/linkedgrey.png';
import Linkedin from './images/Linkedin.png';
import Email from './images/Email.png';
import phone from './images/phone.png';

function CardDetails() {
  const [activeContent, setActiveContent] = useState('about');

  const handleContentChange = (section) => {
    setActiveContent(section);
  };

  return (
    <div className='body'>
      <div className='lines-container'>
        <div className='line'></div>
        <div className='line'></div>
      </div>

      <div className='header-container'> 

      <p className='phd-text3'>Ph.D Students</p>

     
      <div className='buttons-container'>
        <button
          className={`button ${activeContent === 'about' ? 'active' : ''}`}
          onClick={() => handleContentChange('about')}
        >
          About
        </button>
        <button
          className={`button ${activeContent === 'research' ? 'active' : ''}`}
          onClick={() => handleContentChange('research')}
        >
          Research Interest
        </button>
        <button
          className={`button ${activeContent === 'publications' ? 'active' : ''}`}
          onClick={() => handleContentChange('publications')}
        >
          Publications
        </button>
        <button
          className={`button ${activeContent === 'personal' ? 'active' : ''}`}
          onClick={() => handleContentChange('personal')}
        >
          Personal
        </button>
      </div>
      </div>

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

             
            
<a href="https://www.linkedin.com/in/dibakar-sen-9387b534/">
             <img src={Linkedin} alt="" className="linked-image"/>
             </a>


         
         

             </div> 
            
              

      

      {/* Details for each content section */}
      <div className='content-details'>
        {activeContent === 'about' && (
          <div className='content-section'>
            <h2>About</h2>
            <p>This is some information about the person.</p>
          </div>
        )}

        {activeContent === 'research' && (
          <div className='content-section'>
            <h2>Research Interest</h2>
            <p>These are the person's research interests.</p>
          </div>
        )}

        {activeContent === 'publications' && (
          <div className='content-section'>
            <h2>Publications</h2>
            <p>These are the person's publications.</p>
          </div>
        )}

        {activeContent === 'personal' && (
          <div className='content-section'>
            <h2>Personal</h2>
            <p>Personal information goes here.</p>
          </div>
        )}
      </div>
      </div>
      
      

    </div>
  );
}

export default CardDetails;
