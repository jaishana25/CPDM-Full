import React, { useState, useEffect } from 'react';
import './Activities.css';
import axios from 'axios';

import Line35 from './images/Line35.png';
import purak from './images/purak.jpeg';

function Activities() {
  const [designsData, setDesignsData] = useState([]);
  const [sponsoredData, setSponsoredData] = useState([]);

  useEffect(() => {
    async function fetchDesignData() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/designs/")
        console.log(response.data) // Replace with your API endpoint
        setDesignsData(response.data);

        const confResponse = await axios.get("http://127.0.0.1:8000/api/sponsored/"); // Replace with your API endpoint for conferences
        setSponsoredData(confResponse.data);

      } catch (error) {
        console.log(error);
      }
    }

    fetchDesignData();
  }, []);

  return (
    <div className='body'>
      <div className='lines-container'>
        <div className='line'></div>
        {/* Adjust the width as per your desired space */}
        <div className='line'></div>
      </div>

      <p className='phd-text2'>Designs</p>
      <div className='lines-container'>
        <div className='line'></div>
      </div>

      {designsData.map((entry, index) => (
        <div className='wrapperr' key={index}>
          <div className='collapsible'>
            <input type="checkbox" id={`collapsible-head-${index}`} />
            <label htmlFor={`collapsible-head-${index}`}>
              <img src={entry.dpic} alt={entry.dname} className='productimg' />
              <p className='prodname'>{entry.dname}</p>
            </label>
            <div className='collapsible-text'>
              <p>{entry.ddetails}</p>
            </div>
          </div>
        </div>
      ))}

      <section id="spons">
        <p className='phd-text2'>Sponsored Projects</p>
        <div className='lines-container'>
          <div className='line'></div>
        </div>
        <div className="grid6">
        {sponsoredData.map((project, index) => (
            <div className="col6" key={index}>
              <p><strong>Title: </strong>{project.stitle}</p>
              <img src={Line35} alt="li" />
              <div className='grid-container'>
                <p className='deet'><strong>Duration: </strong><br />{project.sduration}</p>
                <p className='deets'><strong>Co-investigators: <br /></strong> {project.sinvest}</p>
              </div>
              <img src={Line35} alt="li" />
              <p><strong> Sponsor: </strong> {project.ssponsor}</p>
            </div>
          ))}
          {/* Repeat this structure for other columns */}
        </div>
      </section>
    </div>
  )
}

export default Activities;
