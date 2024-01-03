// This Program is for the research page
//Author Name: Jaishana Bindhu Priya
//Last Modified:

//========= Headers
import React, { useState, useEffect } from "react"; //reactjs components
import "./Research.css";
import axios from "axios"; //api to fetch data
//=========End Headers

// This code defines a function called Research.
function Research() {
  // This code initializes a state variable called researchData with an empty array and a function to update its value.
  const [researchData, setResearchData] = useState([]);
  // This code is using the useEffect hook to perform side effects in a functional component.
  useEffect(() => {
    // This code defines an asynchronous function named fetchResearchData that can be used to fetch research data from an external source.
    async function fetchResearchData() {
      // This code is using a try-catch block to handle any errors that may occur within the try block.
      try {
        // This code uses the axios library to make an HTTP GET request to a local API endpoint and stores the response in the 'response' variable.
        const response = await axios.get("http://127.0.0.1:8000/api/research/");
        // This code logs the data from the response object to the console.
        console.log(response.data);
        // Sets the research data to the response data received from an API call.
        setResearchData(response.data);
        // Handles any errors that occur within the try block and executes the code within the catch block, providing an error object for further handling.
      } catch (error) {
        console.log(error);
      }
    }
// This code is calling a function named fetchResearchData().
    fetchResearchData();
  }, []);

  const shape = researchData.filter((entry) => entry.topic === "shape");
  const motion = researchData.filter((entry) => entry.topic === "motion");
  const interaction = researchData.filter((entry) => entry.topic === "interaction");
  const designdev = researchData.filter((entry) => entry.topic === "designdev");
  return (
    <div className="body">
      <div className="lines-container">
        <div className="line"></div>

        <div className="line"></div>
      </div>
      {/* ==================== Research Areas ========================== */}
      <p className="phd-text2">Research Areas</p>
      <div className="lines-container">
        <div className="line"></div>
      </div>
      <p className="phd-text2">Shape Understanding</p>
      <div className="grid10">
      {/*Maps over an array of research data, returning a new array with transformed values based on the provided callback function */}
      {shape.map((entry, index) => (
       
        <div className="col10" key={index}>  {/*This code renders a wrapper component with a unique key for each item in a list, allowing for efficient rendering and updating of components */}

          <div className=""> 
          {/*Creates a checkbox input element with a unique id based on the index value, to be used in a collapsible section*/}
            <input type="checkbox" id={`col10-head-${index}`} />
            {/*This code generates a label element with a dynamic htmlFor attribute based on the index value*/}
            <label htmlFor={`col10-head-${index}`}>
              {/* This code renders an image element with a source and alt attribute based on the values of `entry.rpic` and `entry.rname` */}
              <img src={entry.rpic} alt={entry.rname} className="productimg2" />
              <p className="prodname2">{entry.rname}</p>
            </label>
            <div className="collapsible-text">
              <p>{entry.rdetails}</p>
            </div>
          </div>
        
          {/* ============================================== */}
        </div>
      ))}
      </div>
      <p className="phd-text2">Motion Understanding</p>
      <div className="grid10">
      {/*Maps over an array of research data, returning a new array with transformed values based on the provided callback function */}
      {motion.map((entry, index) => (
       
        <div className="col10" key={index}>  {/*This code renders a wrapper component with a unique key for each item in a list, allowing for efficient rendering and updating of components */}

          <div className=""> 
          {/*Creates a checkbox input element with a unique id based on the index value, to be used in a collapsible section*/}
            <input type="checkbox" id={`col10-head1-${index}`} />
            {/*This code generates a label element with a dynamic htmlFor attribute based on the index value*/}
            <label htmlFor={`col10-head1-${index}`}>
              {/* This code renders an image element with a source and alt attribute based on the values of `entry.rpic` and `entry.rname` */}
              <img src={entry.rpic} alt={entry.rname} className="productimg2" />
              <p className="prodname2">{entry.rname}</p>
            </label>
            <div className="collapsible-text">
              <p>{entry.rdetails}</p>
            </div>
          </div>
        
          {/* ============================================== */}
        </div>
      ))}
      </div>
      <p className="phd-text2">Interaction & Behaviour Understanding</p>
      <div className="grid10">
      {/*Maps over an array of research data, returning a new array with transformed values based on the provided callback function */}
      {interaction.map((entry, index) => (
       
        <div className="col10" key={index}>  {/*This code renders a wrapper component with a unique key for each item in a list, allowing for efficient rendering and updating of components */}

          <div className=""> 
          {/*Creates a checkbox input element with a unique id based on the index value, to be used in a collapsible section*/}
            <input type="checkbox" id={`col10-head2-${index}`} />
            {/*This code generates a label element with a dynamic htmlFor attribute based on the index value*/}
            <label htmlFor={`col10-head2-${index}`}>
              {/* This code renders an image element with a source and alt attribute based on the values of `entry.rpic` and `entry.rname` */}
              <img src={entry.rpic} alt={entry.rname} className="productimg2" />
              <p className="prodname2">{entry.rname}</p>
            </label>
            <div className="collapsible-text">
              <p>{entry.rdetails}</p>
            </div>
          </div>
        
          {/* ============================================== */}
        </div>
      ))}
      </div>
      <p className="phd-text2">Product Design & Development</p>
      <div className="grid10">
      {/*Maps over an array of research data, returning a new array with transformed values based on the provided callback function */}
      {designdev.map((entry, index) => (
       
        <div className="col10" key={index}>  {/*This code renders a wrapper component with a unique key for each item in a list, allowing for efficient rendering and updating of components */}

          <div className=""> 
          {/*Creates a checkbox input element with a unique id based on the index value, to be used in a collapsible section*/}
            <input type="checkbox" id={`col10-head3-${index}`} />
            {/*This code generates a label element with a dynamic htmlFor attribute based on the index value*/}
            <label htmlFor={`col10-head3-${index}`}>
              {/* This code renders an image element with a source and alt attribute based on the values of `entry.rpic` and `entry.rname` */}
              <img src={entry.rpic} alt={entry.rname} className="productimg2" />
              <p className="prodname2">{entry.rname}</p>
            </label>
            <div className="collapsible-text">
              <p>{entry.rdetails}</p>
            </div>
          </div>
        
          {/* ============================================== */}
        </div>
      ))}
      </div>
    </div>
  );
}

export default Research;
