import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import './Journal.css';

function Journal() {
  const [journalData, setJournalData] = useState([]);
  const [confData, setConfData] = useState([]); 
  const [patentData, setPatentData] = useState([]); 

  useEffect(() => {
    async function fetchJournalData() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/journal/")
        console.log(response.data) // Replace with your API endpoint
        setJournalData(response.data);

        const confResponse = await axios.get("http://127.0.0.1:8000/api/conference/"); // Replace with your API endpoint for conferences
        setConfData(confResponse.data);

        const patentResponse = await axios.get('http://127.0.0.1:8000/api/patent/');
        setPatentData(patentResponse.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchJournalData();
  }, []);
  return (
    <div className='body'>
       <div className='lines-container'>
        <div className='line'></div>
        {/* Adjust the width as per your desired space */}
        <div className='line'></div>
      </div>
      <section id="journal-sec">
      <p className='phd-text2'>Journal Publication</p>
      <div className='lines-container'>
        <div className='line'></div>
        </div>
        <div className='grid2'>
        {journalData.map((entry, index) => (
         <div className='cot'>
           
          <div className='col2' key={index}>
            
            <h3>{entry.jour} </h3>
            {entry.link && (
            <p> <a href={entry.link} >
        Link
      </a></p>
      )}

            {/* You can render other relevant data from the entry */}
          </div>
          </div>
          
        
        ))}
       
      </div>

      </section>
      <section id="conf-sec">
      <p className='phd-text2'>Conferences,Books & Others</p>
      <div className='lines-container'>
        <div className='line'></div>
        </div>
        <div className='grid2'>
          {confData.map((entry, index) => (
            <div className='cot'>
            <div className='col2' key={index}>
              <h3>{entry.conf}</h3>
              {entry.link && (
            <p> <a href={entry.link} >
        Link
      </a></p>
)}
</div>
            
              {/* You can render other relevant data from the entry */}
            </div>
          ))}
        </div>
      </section>
      <section id="pat-sec">
      <p className='phd-text2'>Patents</p>
      <div className='lines-container'>
        <div className='line'></div>
        </div>
        <div className='grid2'>
          {patentData.map((entry, index) => (
            
            <div className='col2' key={index}>
              <h3>{entry.pat}</h3>
              
              {/* You can render other relevant data from the entry */}
            </div>
            
          ))}
        </div>
      
      </section>
      


    </div>
    
  )
}

export default Journal