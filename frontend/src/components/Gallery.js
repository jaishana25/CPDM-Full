// This Program is for gallery main page
//Author Name: Jaishana Bindhu Priya
//Last Modified:

//========= Headers
import "./Gallery.css"; //styling of gallery page
import { useState, useEffect } from "react"; //reactjs component
import axios from "axios"; //api to fetch data
import ImageSlider2 from "./ImageSlider2"; // Import the ImageSlider component
import { SliderData } from "./SliderData"; // the images inside the sliding carousel
import { useLocation } from "react-router-dom"; //to navigate within a page
import React from "react"; //reactjs component
//=========End Headers

function Gallery() { 
  // This code initializes a state variable called "newsData" with an empty array and a function called "setNewsData" to update its value.
  const [newsData, setNewsData] = useState([]); 
   // This code initializes a state variable called eventsData with an empty array and a function to update its value.
  const [eventsData, setEventsData] = useState([]);
  // This code is using the `useLocation` hook from a library or framework to get the current location of the user in the application.
  const location = useLocation(); 
// This code uses the useEffect hook to perform side effects in a functional component.
  useEffect(() => {
    async function fetchNewsData() { 
      // This code is using a try-catch block to handle any errors that may occur within the try block.
      try {
        // This code uses the axios library to make an HTTP GET request to a local API endpoint and stores the response in the 'response' variable.
        const response = await axios.get("http://127.0.0.1:8000/api/news/");
        // This code logs the data from the response object to the console.
        console.log(response.data);
        // Sets the news data to the response data received from an API call.
        setNewsData(response.data);

        // // Makes a GET request to the specified URL using axios and waits for the response before continuing execution.
        const eventresponse = await axios.get(
          "http://127.0.0.1:8000/api/events/"
        );
        // This code logs the data property of the eventresponse object to the console.
        console.log(eventresponse.data);
        // Sets the events data to the response data received from the API.
        setEventsData(eventresponse.data);
      } catch (error) {
        console.log(error);
      }
    }
// Fetches news data from an API.
    fetchNewsData();
  }, []);

  // This code is using the useEffect hook to perform side effects in a functional component.
  useEffect(() => {
    // This code logs a message indicating that the location has changed, along with the value of the location variable.
    console.log("Location changed:", location);
    // This code retrieves the hash value from the current URL and assigns it to the variable 'hash'.
    const hash = location.hash;
    // Checks if the variable "hash" has a truthy value.
    if (hash) {
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
    }
  }, [location]);

  return (
    <div className="body">
      <div className="lines-container">
        <div className="line"></div>
        {/* Adjust the width as per your desired space */}
        <div className="line"></div>
      </div>
      <section id="section-lab">
        <p className="phd-text2"> Lab </p>
        <div className="lines-container2">
          <div className="line"></div>
        </div>
        {/* =====================lab images slider carousel ========================= */}

        <div className="containerr">
          <ImageSlider2 slides={SliderData} /> {/* calling the sliding carousel here where the slides are images needed for carousel */}
        </div>
        <br />
        {/* ============================================== */}
      </section>

      {/* =====================latest news section ========================= */}
      <section id="section-articles">
        <p className="phd-text2">
          {" "}
          Latest News{" "}
          <span className="see-more"> {/*on click of see mroe re directs to another page with all list  */}
            <a href="/articles">
              <u>See more </u>
            </a>{" "}
          </span>{" "}
        </p>
        <div className="lines-container">
          <div className="line"></div>
        </div>
{/* gets data from backend regarding latest news, it has news heading, image and details  */}
        {newsData.map((entry, index) => (
          <div className="wrapperr" key={index}>
            <div className="collapsible"> {/* on click of the icon it expands and then collapses */}
              <input type="checkbox" id={`collapsible-head-${index}`} />
              <label htmlFor={`collapsible-head-${index}`}>
                <img src={entry.npic} alt={entry.news} className="productimg" />
                <p className="prodname">{entry.news}</p>
              </label>
              <div className="collapsible-text">
                <p>{entry.ndetails}</p>
              </div>
            </div>
          </div>
        ))}

        {/* ============================================= */}

        <br />
      </section>

      <section id="section-events">
        {/* =====================events images section ========================= */}

        <p className="phd-text2">
          {" "}
          Events{" "}
          <span className="see-more"> {/* on click of see more, redirects to another page with all list of events */}
            <a href="">
              <u>See more </u>{" "}
            </a>{" "}
          </span>{" "}
        </p>
        <div className="lines-container">
          <div className="line"></div>
        </div>
        <div className="gridg">

          {/*from backend loads data of events, in form of image */}
          {eventsData.map((eventItem, index) => (
            <div className="coll" key={index}>
              <img
                src={eventItem.epic}
                alt={`event-${index}`}
                className="imagehold"
              />
            </div>
          ))}
        </div>
        {/* ============================================== */}
      </section>
    </div>
  );
}

export default Gallery;
