// This Program is for publications page
//Author Name: Jaishana Bindhu Priya
//Last Modified:

//========= Headers
import React, { useState, useEffect } from "react"; //reactjs componennts
import axios from "axios"; //api to fetch data
import "./Journal.css"; //styling
import { useLocation } from "react-router-dom"; //to navigate within the page
//=========End Headers

// Defines a constructor function called Journal, which can be used to create new instances of a journal object.
function Journal() {
  // This code initializes a state variable called "journalData" with an empty array and a function called "setJournalData" to update its value.
  const [journalData, setJournalData] = useState([]);
  // This code initializes a state variable called confData with an empty array and a function called setConfData to update its value.
  const [confData, setConfData] = useState([]);
  // This code initializes a state variable called patentData with an empty array and a function called setPatentData to update the state.
  const [patentData, setPatentData] = useState([]);
  // This code is using the `useLocation` hook from a library or framework to get the current location of the user.
  const location = useLocation();

  // This code is using the useEffect hook to perform side effects in a functional component.
  useEffect(() => {
    // This code defines an asynchronous function named fetchJournalData that is used to fetch data from a journal.
    async function fetchJournalData() {
      // This code is using a try-catch block to handle any errors that may occur within the try block.
      try {
        // This code uses the axios library to make an HTTP GET request to a local API endpoint and stores the response in the 'response' variable.
        const response = await axios.get("http://127.0.0.1:8000/api/journal/");
        // This code logs the data from the response object to the console.
        console.log(response.data); 
        // Sets the journal data to the response data received from an API call.
        setJournalData(response.data);
        // // Makes a GET request to the specified URL using the axios library and stores the response in the confResponse variable.
        const confResponse = await axios.get(
          "http://127.0.0.1:8000/api/conference/"
        ); 
        // Sets the configuration data with the response data from the API.
        setConfData(confResponse.data);
          // // Makes a GET request to the specified URL using the axios library and awaits the response before assigning it to the patentResponse variable.
        const patentResponse = await axios.get(
          "http://127.0.0.1:8000/api/patent/"
        );
        // Sets the patent data received from the API response to the state variable 'patentData'.
        setPatentData(patentResponse.data);
      } catch (error) {
        console.log(error);
      }
    }
// Fetches journal data from an API.
    fetchJournalData();
  }, []);

  // This code is using the useEffect hook to execute a function when the component mounts or when a specific dependency changes.
  useEffect(() => {
    // This code logs a message indicating that the location has changed, along with the value of the location variable.
    console.log("Location changed:", location);
    // This code retrieves the hash value from the current URL location and assigns it to the variable "hash".
    const hash = location.hash;
    // Checks if the variable "hash" is truthy (not null, undefined, 0, false, or an empty string).
    if (hash) {
      // Adds an event listener to the window object that triggers a callback function when the page finishes loading.
      window.addEventListener("load", () => {
        // This code selects an element from the DOM using the provided hash value.
        const element = document.querySelector(hash);
        // This code logs the selected element to the console, providing a helpful message for debugging purposes.
        console.log("Selected element:", element);
        if (element) {
          // Scrolls the element into view, aligning it either at the top or bottom of the viewport depending on its current position.
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
      });
    }
  }, [location]);
  return (
    <div className="body">
      <div className="lines-container">
        <div className="line"></div>
        {/* ===================== journals ========================= */}

        <div className="line"></div>
      </div>
      <section id="journal-sec">
        <p className="phd-text2">Journal Publication</p>
        <div className="lines-container">
          <div className="line"></div>
        </div>
        <div className="grid2">
          {/* This code is using the map function to iterate over an array of journalData and return a new array with modified entries */}
          {journalData.map((entry, index) => (
            <div className="cot">
              <div className="col2" key={index}> {/* the white boxes for each journal detail */}
                <div className="col-left">
                  <h3>
                    {" "}
                    <span className="l1">Author(s)</span>: {entry.auth}{" "}
                  </h3>
                  <h3>
                    {" "}
                    <span className="l2">Paper Title</span>: {entry.ptitle}{" "}
                  </h3>
                  <h3>
                    <span className="l3">Journal </span>: {entry.journal}{" "}
                  </h3>
                  <h3>
                    <span className="l4">Publisher & Info </span>: {entry.pinfo}{" "}
                  </h3>
                  <h3>
                    <span className="l5">Year </span>: {entry.pyear}{" "}
                  </h3>
                </div>

                <div className="col-right"> {/* the link to the right side of the card */}
                  {entry.link && (
                    <p>
                      {" "}
                      <a href={entry.link}>Link</a>
                    </p>
                  )}
                </div>
              </div>
              {/* ============================================== */}
            </div>
          ))}
        </div>
      </section>
      {/* ===================== Conferences,Books & Others ========================= */}

      <p className="phd-text2" id="conf-sec">
        Conferences,Books & Others
      </p>
      <div className="lines-container">
        <div className="line"></div>
      </div>
      <div className="grid2">
        {/* This code is using the map function to iterate over an array of confData and return a new array with modified values */}
        {confData.map((entry, index) => (
          <div className="cot">
            <div className="col2" key={index}> {/* the white boxes containing information of conferences */}
              <div className="col-left">
                <h3>
                  {" "}
                  <span className="l11">Author(s)</span>: {entry.auth}{" "}
                </h3>
                <h3>
                  {" "}
                  <span className="l12">Paper Title</span>: {entry.ptitle}{" "}
                </h3>
                <h3>
                  <span className="l13">Conferences/Others </span>:{" "}
                  {entry.journal}{" "}
                </h3>
                <h3>
                  <span className="l14">Publisher & Info </span>: {entry.pinfo}{" "}
                </h3>
                <h3>
                  <span className="l15">Year </span>: {entry.pyear}{" "}
                </h3>
              </div>

              <div className="col-right">
                {/* the link to the right of the box */}
                {entry.link && (
                  <p>
                    {" "}
                    <a href={entry.link}>Link</a>
                  </p>
                )}
              </div>
            </div>
            {/* ============================================== */}
          </div>
        ))}
      </div>

      <section id="pat-sec">
        {/* ===================== patents ========================= */}

        <p className="phd-text2">Patents</p>
        <div className="lines-container">
          <div className="line"></div>
        </div>
        <div className="grid2">
        {/* Maps over the patentData array and returns a new array with transformed values using the provided callback function */}
          {patentData.map((entry, index) => (
            <div className="cot">
              
              <div className="col2" key={index}> {/* the white boxes containing information of patents */}
                <div className="col-left">
                  <h3>
                    {" "}
                    <span className="l6">Inventor</span>: {entry.auth}{" "}
                  </h3>
                  <h3>
                    {" "}
                    <span className="l7">Patent Title</span>: {entry.ptitle}{" "}
                  </h3>
                  <h3>
                    <span className="l8">Patent no/Application no </span>:{" "}
                    {entry.pno}{" "}
                  </h3>
                  {entry.gon && (
                    <h3>
                      <span className="l9">Granted on </span>: {entry.gon}{" "}
                    </h3>
                  )}
                  <h3>
                    <span className="l10">Paper Year </span>: {entry.pyear}{" "}
                  </h3>
                </div>

                <div className="col-right">
                  {entry.link && (
                    <p>
                      {" "}
                      <a href={entry.link}>Link</a>
                    </p>
                  )}
                </div>
              </div>
              {/* ============================================== */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Journal;
