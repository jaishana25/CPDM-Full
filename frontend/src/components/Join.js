// This Program is for join us page
//Author Name: Jaishana Bindhu Priya
//Last Modified:

//========= Headers
import React, { useState, useEffect } from "react"; //reactjs components
import "./Join.css"; //Styling Library
import axios from "axios"; //api to fetch data

//=========End Headers

//========Function for

function Join() {
  // This code declares a state variable called "joinData" and a function to update it called "setJoinData". The initial value of "joinData" is an empty array.
  const [joinData, setJoinData] = useState([]);
 // This code is using the useEffect hook to execute a function when the component mounts or when a specific dependency changes.
  useEffect(() => {
    // This code defines an asynchronous function called fetchJoinData, which is likely used to fetch and join data from multiple sources.
    async function fetchJoinData() {
      try {
        // This code uses the axios library to make an HTTP GET request to the specified URL and assigns the response to the 'response' variable.
        const response = await axios.get("http://127.0.0.1:8000/api/join/");
        // // Logs the data received from the API endpoint to the console. 
        console.log(response.data); 
        // Sets the join data to the response data.
        setJoinData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    // This code calls a function named fetchJoinData().
    fetchJoinData();
  }, []);
  // Filters the array 'joinData' to only include objects where the 'job_type' property is equal to "current".
  const current = joinData.filter((join) => join.job_type === "current");
  // Filters the `joinData` array to only include objects where the `job_type` property is equal to "research".
  const research = joinData.filter((join) => join.job_type === "research");
  // Filters the 'joinData' array to only include objects where the 'job_type' property is equal to "interns".
  const interns = joinData.filter((join) => join.job_type === "interns");
  

  return (
    <div className="body">
      <div className="lines-container">
        <div className="line"></div>

        <div className="line"></div>
      </div>
      {/* ===================== current openings ========================= */}

      <p className="phd-text2">Current Openings</p>
      <div className="lines-container">
        <div className="line"></div>
      </div>

      <div className="grid3">
        <div className="coti"> {/*  the purple box that holds the details*/}
        {/* Reverses the elements in the 'current' array and maps each element to a new array, applying the 'join' function to each element */}
          {current.reverse().map((join, index) => (
            
            <div className="col3" key={index}> 
              <p>Role: {join.role} </p>
              <p>Description: {join.desc} </p>
              <p>Duration: {join.jdur} </p>
              <p>Salary: {join.salary} </p>
              <p>Qualifications: {join.qualifications} </p>
              <div className="apply-button"> {/*apply now button, on click takes to the link provided in the backend */}
                <p>
                  {" "}
                  <a href={join.link} target="_blank" rel="noopener noreferrer">
                    Apply Here
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =====================prospective research students ========================= */}

      <p className="phd-text2">For prospective research students</p>
      <div className="lines-container">
        <div className="line"></div>
      </div>

      <div className="grid3">
        <div className="coti"> {/*  the purple box that holds the details*/}
        {/* Reverses the elements in the 'research' array and maps each element to a new array, joining them with a comma and their index. */}
          {research.reverse().map((join, index) => (
          
            <div className="col3" key={index}>
              <p>Role: {join.role} </p>
              <p>Description: {join.desc} </p>
              <p>Duration: {join.jdur} </p>
              <p>Salary: {join.salary} </p>
              <p>Qualifications: {join.qualifications} </p>
              <div className="apply-button"> {/*apply now button, on click takes to the link provided in the backend */}
                <p>
                  {" "}
                  <a href={join.link} target="_blank" rel="noopener noreferrer">
                    Apply Here
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* ============================================== */}
      </div>
      {/* =====================prospective internship students ========================= */}

      <p className="phd-text2">For prospective internship/projects</p>
      <div className="lines-container">
        <div className="line"></div>
      </div>

      <div className="grid3">
        <div className="coti"> {/*  the purple box that holds the details*/}
        {/* Reverses the order of the interns array and maps each element to a new array, applying the join function and keeping track of the index */}
          {interns.reverse().map((join, index) => (
            <div className="col3" key={index}>
              <p>Role: {join.role} </p>
              <p>Description: {join.desc} </p>
              <p>Duration: {join.jdur} </p>
              <p>Salary: {join.salary} </p>
              <p>Qualifications: {join.qualifications} </p>

              <div className="apply-button">
                <p>
                  {" "}
                  <a href={join.link} target="_blank" rel="noopener noreferrer">
                    Apply Here
                  </a>
                </p>
              </div>
              {/* ============================================== */}
            </div>
          ))}
        </div>
      </div>
      {/* =====================contact us section  ========================= */}

      <p className="phd-text2">Contact Us</p>
      <div className="lines-container">
        <div className="line"></div>
      </div>
      <div className="parent">
        <div className="div1"></div> {/* the blue box on the left of the screen*/}

        <div className="div3"> {/* the box that holds the google maps*/}
          {" "}
          {/*This code uses an iframe element to embed external content into a webpage */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1781.1142034640122!2d77.56763839442304!3d13.014617946078143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d38c0e294d%3A0x1adc73f47b7773c0!2sCentre%20for%20Product%20Design%20and%20Manufacturing%20(CPDM)!5e0!3m2!1sen!2sin!4v1688472624670!5m2!1sen!2sin"
            width="700"
            height="300"
            style={{
              border: "0",
              marginRight: "0em",
              marginTop: "1em",
              marginBottom: "1rem",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            class="google-map-iframe"
          ></iframe>
        </div>
      </div>
      {/* ============================================== */}
    </div>
  );
}

export default Join;
