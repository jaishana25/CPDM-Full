import React from 'react'
import purak from './images/purak.jpeg'
import { useState, useEffect } from "react";
import axios from "axios";
function Research() {
  const [researchData, setResearchData] = useState([]); 
  useEffect(() => {
    async function fetchResearchData() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/research/")
        console.log(response.data) // Replace with your API endpoint
        setResearchData(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchResearchData();
  }, []);
  return (
    <div className='body'>
    <div className='lines-container'>
     <div className='line'></div>
     {/* Adjust the width as per your desired space */}
     <div className='line'></div>
     </div>

     <p className='phd-text2'>Research Areas</p>
     <div className='lines-container'>
     <div className='line'></div>
   </div>
  

   {researchData.map((entry, index) => (
        <div className='wrapperr' key={index}>
          <div className='collapsible'>
            <input type="checkbox" id={`collapsible-head-${index}`} />
            <label htmlFor={`collapsible-head-${index}`}>
              <img src={entry.rpic} alt={entry.rname} className='productimg' />
              <p className='prodname'>{entry.rname}</p>
            </label>
            <div className='collapsible-text'>
              <p>{entry.rdetails}</p>
            </div>
          </div>
        </div>
      ))}

 
   
    
     </div>

   
   


  )
}

export default Research