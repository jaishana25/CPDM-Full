import React from 'react';
import './People.css';
import Prof from './images/Prof.png';
import linkedgrey from './images/linkedgrey.png';
import Linkedin from './images/Linkedin.png';
import Email from './images/Email.png';
import phone from './images/phone.png';

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'; 


function People() { 
  const [personData, setPersonData] = useState([]);

  const renderBulletPoints = (pname) => {
    const names = pname.split('|');
    return (
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name.trim()}</li>
        ))}
      </ul>
    );
  };
  
  useEffect(() => {
    async function fetchPeopleData() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/person/")
        console.log(response.data) // Replace with your API endpoint
        setPersonData(response.data);

      } catch (error) {
        console.log(error);
      }
    }

    fetchPeopleData();
  }, []);
  const phdStudents = personData.filter(student => student.student_type === 'PhD');
  const mtechStudents = personData.filter(student => student.student_type === 'MTech');
  const researchAssociates = personData.filter(student => student.student_type === 'RA');
  const interns = personData.filter(student => student.student_type === 'Intern');
  const alumni = personData.filter(student => student.student_type === 'Alumni');


  return (
    <div className='body'>
      <div className='lines-container'>
        <div className='line'></div>
        {/* Adjust the width as per your desired space */}
        <div className='line'></div>
      </div>
      <section id="section-zero">
      <p className='phd-text2'>Professor</p>
      <div className='lines-container'>
     <div className='line'></div>
   </div>
      <div className='gridd'>
        
        <div className='colu'>
          <a href="prof">
        <div className='img2'>
              <img src={Prof} alt='Card Image' />
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
        <div className='colu'>
          
          </div>

      </div>

      {/* <div className='container'>

        <div className='column'>
          
        <p className='professor-text'>Professor</p>
          <div className='card'>
            <div className='image-holder'>
              <img src={Prof} alt='Card Image' />
            </div>
            <div className='card-content'>
             
            </div>
            <img src={linkedgrey} alt=""/>
          </div>
        
        </div>

        <div className='column'></div>
      
      </div> */}
      </section>
      
      <br/>
      
      <section id="section-one">
      <p className='phd-text2'>Ph.D Students</p>
      <div class="grid">
      
      {phdStudents.map((student, index) => (
          <div className="col" key={index}>
            <a href={`/card-details/${student.id}`}>
              <img src={student.ppic} alt="" className="img2" />
              <div className='card-content'>
              <h3>{renderBulletPoints(student.pname)}</h3>
            <p>
            <img src={Email} alt="mail" className='cardicon'/>:  {student.pmail}
            </p>
            
           
            
             </div>
          

             </a>
            <a href={student.link}>
             <img src={Linkedin} alt=""  className="linked-image" style={{ width: '30px', height: '30px' }}/>
             </a>
          </div>
        ))}
           
          
          
      </div>
      </section>
      <section id="section-two">
      <p className='phd-text2'>M.Tech/M.Des Students</p>
      <div class="grid">
      
      {mtechStudents.map((student, index) => (
          <div className="col" key={index}>
            <a href="card-details">
              <img src={student.ppic} alt="" className="img2" />
              <div className='card-content'>
            <h3>{student.pname}</h3>
            <p>
            <img src={Email} alt="mail" className='cardicon'/>:  {student.pmail}
            </p>
            
           
            
             </div>
          

            </a>
            <a href={student.link}>
             <img src={Linkedin} alt=""  className="linked-image" style={{ width: '30px', height: '30px' }}/>
             </a>
          </div>
        ))}
           
          
          
      </div>
      </section>
      <section id="section-three">
      <p className='phd-text2'>Research Associates</p>
      <div class="grid">
      {researchAssociates.map((student, index) => (
          <div className="col" key={index}>
            <a href="card-details">
              <img src={student.ppic} alt="" className="img2" />
              <div className='card-content'>
            <h3>{student.pname}</h3>
            <p>
            <img src={Email} alt="mail" className='cardicon'/>:  {student.pmail}
            </p>
            
           
            
             </div>
          

            </a>
            <a href={student.link}>
             <img src={Linkedin} alt=""  className="linked-image" style={{ width: '30px', height: '30px' }}/>
             </a>
          </div>
        ))}
        
      </div>
      </section>
      <section id="section-four">
      <p className='phd-text2'>Interns</p>
      <div class="grid">
        <div class="col">
        {interns.map((student, index) => (
          <div className="col" key={index}>
            <a href="card-details">
              <img src={student.ppic} alt="" className="img2" />
              <div className='card-content'>
            <h3>{student.pname}</h3>
            <p>
            <img src={Email} alt="mail" className='cardicon'/>:  {student.pmail}
            </p>
            
           
            
             </div>
          

            </a>
            <a href={student.link}>
             <img src={Linkedin} alt=""  className="linked-image" style={{ width: '30px', height: '30px' }}/>
             </a>
          </div>
        ))}


        </div>
      </div>
      </section>
      <section id="section-five">
      <p className='phd-text2'>Alumni</p>
      <div class="grid">
        <div class="col">
        {alumni.map((student, index) => (
          <div className="col" key={index}>
            <a href="card-details">
              <img src={student.ppic} alt="" className="img2" />
              <div className='card-content'>
            <h3>{student.pname}</h3>
            <p>
            <img src={Email} alt="mail" className='cardicon'/>:  {student.pmail}
            </p>
            
           
            
             </div>
          

            </a>
            <a href={student.link}>
             <img src={Linkedin} alt=""  className="linked-image" style={{ width: '30px', height: '30px' }}/>
             </a>
          </div>
        ))}


        </div>
      </div>
      </section>



    </div>
  );
}

export default People;
