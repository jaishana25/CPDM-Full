// This Program is for activities page
//Author Name: Jaishana Bindhu Priya
//Last Modified:

//========= Headers
import React, { useState, useEffect } from "react"; //react js components
import "./Activities.css"; //styling for this page
import axios from "axios"; //axios library for api fetching
import { useLocation } from "react-router-dom"; //for routing to pages
import Line35 from "./images/Line35.png";
//=========End Headers

function Activities() {
  // This code initializes a state variable called "designsData" with an empty array and a function called "setDesignsData" to update its value.
  const [designsData, setDesignsData] = useState([]);
  // This code declares a state variable called "sponsoredData" and a function to update it called "setSponsoredData". The initial value of "sponsoredData" is an empty array.
  const [sponsoredData, setSponsoredData] = useState([]);
  // This code is using the `useLocation` hook from a library or framework to get the current location.
  const location = useLocation();

  // Runs a side effect function after every render. The effect function is passed as the first argument and can be cleaned up by returning a function.
  useEffect(() => {
    
    async function fetchDesignData() { // This code is using a try-catch block to handle any errors that may occur within the try block.
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/designs/"); //the api which has details od deisgns
        console.log(response.data); // Replace with your API endpoint
        setDesignsData(response.data);

        const confResponse = await axios.get(// This code is making a request to a local API endpoint at "http://127.0.0.1:8000/api/sponsored/".
          "http://127.0.0.1:8000/api/sponsored/"
        ); //  API endpoint for sponsored
        setSponsoredData(confResponse.data); 
      } catch (error) {
        console.log(error);
      }
    }

    fetchDesignData();
  }, []);

  useEffect(() => { // This code logs a message indicating that the location has changed, along with the value of the location variable.
    console.log("Location changed:", location);
    const hash = location.hash;
    if (hash) {
      // Adds an event listener to the window object that triggers a callback function when the page finishes loading.
      window.addEventListener("load", () => { 
        const element = document.querySelector(hash); // This code logs the selected element to the console, providing a helpful message for debugging purposes.
        console.log("Selected element:", element);
        if (element) {
          element.scrollIntoView({ // This code sets the scroll behavior to smooth, which creates a smooth scrolling effect when navigating to different sections of a webpage.
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          }); // 
        }
      });
    }
  }, [location]);

  return (
    <div className="body">
      {/* =====================Designed products section========================= */}
      <div className="lines-container">
        <div className="line"></div>

        <div className="line"></div>
      </div>

      <p className="phd-text2">Designed Products</p>
      <div className="lines-container">
        <div className="line"></div>
      </div>
{/* gets data from backend regarding designed products, with name of product , image and details */}
      {designsData.map((entry, index) => (
        <div className="wrapperr" key={index}>
          <div className="collapsible"> {/* the white card component which on click expands */}
            <input type="checkbox" id={`collapsible-head-${index}`} />
            <label htmlFor={`collapsible-head-${index}`}>
              <img src={entry.dpic} alt={entry.dname} className="productimg" /> <br></br>
              <p className="prodname">{entry.dname}</p> 
           
            <div className="collapsible-text">
              <p>{entry.ddetails}</p>
            </div>
            </label>
          </div>
          
          {/* ============================================================================================ */}
        </div>
        
      ))}

      <section id="spons">
        {/* =====================Sponsored projects section =======================================================================*/}
        <p className="phd-text2">Sponsored Projects</p>
        <div className="lines-container">
          <div className="line"></div>
        </div>
        <div className="grid6">

    {/* gets data from backend regarding sponsored projects details, its title, duration,co investigators, sponsor  */}
          {sponsoredData.map((project, index) => (
            <div className="col6" key={index}> {/*the orange card  */}
              <p>
                <strong>Title: </strong>
                {project.stitle}
              </p>
              <img src={Line35} alt="li" />
              <div className="grid-container">
                <p className="deet">
                  <strong>Duration: </strong>
                  <br />
                  {project.sduration}
                </p>
                <p className="deets">
                  <strong>
                    Co-investigators: <br />
                  </strong>{" "}
                  {project.sinvest}
                </p>
              </div>
              <img src={Line35} alt="li" />
              <p>
                <strong> Sponsor: </strong> {project.ssponsor}
              </p>
            </div>
          ))}
          {/* ============================================================================================ */}
        </div>
      </section>
    </div>
  );
}

export default Activities;
