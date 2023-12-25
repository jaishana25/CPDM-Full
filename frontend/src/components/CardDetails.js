import React, { useState } from 'react';
import './CardDetails.css';
import Profu from './images/Prof.png';
import linkedgrey from './images/linkedgrey.png';
import Linkedin from './images/Linkedin.png';
import Email from './images/Email.png';
import phone from './images/phone.png';
import { useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';


function CardDetails() {
  const { id } = useParams();
  console.log(id)
  const [activeContent, setActiveContent] = useState('about');
  
  const [personData, setPersonData] = useState({});

  useEffect(() => {
    async function fetchPersonData() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/person/details/' + id + '/'); // Replace with your API endpoint
        console.log(response.data);
        setPersonData(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPersonData();
  }, [id]);


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

        <img src= {'http://127.0.0.1:8000' + personData.ppic} alt="" className="img2" />
            <div className='card-content'>
              <h3>{personData.pname}</h3>
              <p>
                <img src={Email} alt="mail" className='cardicon'/>: {personData.pmail}
              </p>
              <a href={personData.link}>
                <img src={Linkedin} alt="" className="linked-image" style={{ width: '30px', height: '30px' }}/>
              </a>
            </div>
          
          
      
             


         
         

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