// This Program is for About Page
//Author Name: Jaishana Bindhu Priya
//Last Modified:

//========= Headers
import React from "react"; //for reactjs code
import aboutbg from "./images/aboutbg.png"; //for the cpdm dept image in background
import "./About.css"; //styling of the page
import fac from "./images/fac.jpeg"; //facilities image
//=========End Headers

function About() {
  return (
    <div className="body">
     
      {/* =====================The header part of the page with animated font========================= */}
      <div className="lines-container">
        <div className="line"></div>
    
        <div className="line"></div>
      </div>
     
      <p className="phd-text2">About Us</p>
      <div className="lines-container">
        <div className="line2"></div>
      </div>
      <div className="image-container"> {/* the container which has the image */}
        <img src={aboutbg} alt="about" className="responsive-image"></img>
        <div className="text-overlay"> 
          <div className="wrapper">
            <div className="static-txt">Welcome to</div>
            <ul className="dynamic-txt"> {/* the animated texts*/}
              <li>
                <span>SCALE Lab </span>
              </li>
              <li>
                <span>CPDM </span>
              </li>

              <li>
                <span>IISc</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*==========================================================================*/}

      {/* =====================Vision and Mission ========================= */}
      <div className="grids">
        <div className="col2"> {/* the blue cards */}
          <div className="cardcont2">
            <p>Vision </p>
          </div>
          <p className="content"> {/* inside the card text*/}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consequat, mi non feugiat tristique, elit dolor finibus metus, eu
            rhoncus arcu nisi eu est. Mauris sit amet lorem vitae purus lobortis
            vestibulum. Pellentesque habitant morbi tristique senectus et netus
            et malesuada fames ac turpis egestas. m. Mauris fringilla sem eu
            erat laoreet venenatis.
          </p>
        </div>
        <div className="col2">
          <div className="cardcont2">
            <p>Mission </p>
          </div>
          <p className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consequat, mi non feugiat tristique, elit dolor finibus metus, eu
            rhoncus arcu nisi eu est. Mauris sit amet lorem vitae purus lobortis
            vestibulum. Pellentesque habitant morbi tristique senectus et netus
            et malesuada fames ac turpis egestas. m. Mauris fringilla sem eu
            erat laoreet venenatis.
          </p>
        </div>
      </div>
      {/*==========================================================================*/}
      {/* ===================== Research Facilities Part ========================= */}
      <p className="phd-text2">Research Faciltities</p> 

      <div className="gridss">
        <div className="col4"> {/* the white cards which hold the images*/}
          <div className="image-holder">
            <img src={fac} alt="Card Image" />
          </div>
          <p>metuseu rhoncusarcu</p> {/*  description of the images */}
        </div>
        <div className="col4">
          <div className="image-holder">
            <img src={fac} alt="Card Image" />
          </div>
          <p>metuseu rhoncusarcu</p>
        </div>
        <div className="col4">
          <div className="image-holder">
            <img src={fac} alt="Card Image" />
          </div>
          <p>metuseu rhoncusarcu</p>
        </div>
        <div className="col4">
          <div className="image-holder">
            <img src={fac} alt="Card Image" />
          </div>
          <p>metuseu rhoncusarcu</p>
        </div>
      </div>

      <div className="gridss">
        <div className="col4">
          {" "}
          <div className="image-holder">
            <img src={fac} alt="Card Image" />
          </div>
          <p>metuseu rhoncusarcu</p>
        </div>
        <div className="col4">
          <div className="image-holder">
            <img src={fac} alt="Card Image" />
          </div>
          <p>metuseu rhoncusarcu</p>
        </div>
        <div className="col4">
          <div className="image-holder">
            <img src={fac} alt="Card Image" />
          </div>
          <p>metuseu rhoncusarcu</p>
        </div>
        <div className="col4">
          <div className="image-holder">
            <img src={fac} alt="Card Image" />
          </div>
          <p>metuseu rhoncusarcu</p>
        </div>
      </div>

      {/*==========================================================================*/}
    </div>
  );
}

export default About;
