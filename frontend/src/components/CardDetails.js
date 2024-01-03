// This Program is for on click of each card, the card details page
//Author Name: Jaishana Bindhu Priya
//Last Modified:

//========= Headers
import React, { useState } from "react"; //reactjs components
import "./CardDetails.css"; //styling
import Linkedin from "./images/Linkedin.png"; //import linkedin icon image
import Email from "./images/Email.png"; //import email icon image
import { useEffect } from "react"; //reactjs component to fetch data
import axios from "axios"; //api library to fetch data
import { useParams } from "react-router-dom"; //gives each card a id
import github from "./images/github.png"; //import github icon
import behance from "./images/behance.svg"; //import behance icon
//=========End Headers

function CardDetails() {
  const { id } = useParams();
  console.log(id);
  const [activeContent, setActiveContent] = useState("about"); // This code is using a for loop to iterate over an array and check if each element is equal to a specific value.

  const [personData, setPersonData] = useState({}); // // This function takes in a parameter pname and renders bullet points for each item in the pname array in backend those who are seperated by pipelien "\"".
  const renderBulletPoints = (pname) => {
    const names = pname.split("|"); 
    return (
      <ul style={{ paddingLeft: 10 }}>
        {names.map((name, index) => (
          <li key={index}>{name.trim()}</li> 
        ))}
      </ul>
    );
  };
  useEffect(() => {
    async function fetchPersonData() { // This code is using a try-catch block to handle any errors that may occur within the try block.
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/person/details/" + id + "/"  
        ); // Replace with your API endpoint
        console.log(response.data);
        setPersonData(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPersonData();
  }, [id]);
// Defines a function that handles content changes for a given section.
  const handleContentChange = (section) => {
    setActiveContent(section);
  };

  return (
    <div className="body">
      <div className="lines-container">
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className="header-container">
        <p className="phd-text3">Ph.D Students</p>

        {/* =====================THE 4 BUTTONS, about, research, publications, personal ========================= */}
        <div className="buttons-container">
          {/* if clicked button is about, then about is set to active state and content is changed*/}
          <button
            className={`button ${activeContent === "about" ? "active" : ""}`}
            onClick={() => handleContentChange("about")}
          >

            About
          </button>
          {/* if clicked button is research , then research is set to active state and content is changed*/}
          <button
            className={`button ${activeContent === "research" ? "active" : ""}`}
            onClick={() => handleContentChange("research")}
          >
            Research Interest
          </button>
          {/* if clicked button is publications, then publications is set to active state and content is changed*/}
          <button
            className={`button ${
              activeContent === "publications" ? "active" : ""
            }`}
            onClick={() => handleContentChange("publications")}
          >
            Publications
          </button>
          {/* if clicked button is personal, the personal t is set to active state and content is changed*/}
          <button
            className={`button ${activeContent === "personal" ? "active" : ""}`}
            onClick={() => handleContentChange("personal")}
          >
            Personal
          </button>
        </div>
      </div>
      {/* ============================================================================= */}
      <div className="lines-container">
        <div className="line"></div>
      </div>
      <div className="gridd">
        <div className="coli"> {/* the cards  */}
          {/* =====================the left side card ========================= */}
          <img
            src={"http://127.0.0.1:8000" + personData.ppic}
            alt=""
            className="img2"
          />
          <div className="card-content"> {/* the left card details  */}
            <h3>{personData.pname}</h3>

            {personData?.pduration && (
              <>
                <p>Duration: {personData.pduration}</p>
              </>
            )}
            {personData?.project && (
              <>
                <p>Project: {personData.project}</p>
              </>
            )}

            {personData?.pduration && (
              <>
                <p>Duration: {personData.pduration}</p>
              </>
            )}
            {personData?.program && (
              <>
                <p>Program: {personData.program}</p>
              </>
            )}
            {personData?.dept && (
              <>
                <p>Department: {personData.dept}</p>
              </>
            )}
            {personData?.restitle && (
              <>
                <p>Research Title: {personData.restitle}</p>
              </>
            )}
            {personData?.pposition && (
              <>
                <p>Current Position: {personData.pposition}</p>
              </>
            )}
            <div className="socialss"> {/* the social media icons below */}
              <p>
                <span className="email-container">
                  <img src={Email} alt="mail" className="cardicon" />
                  <span className="email-text">{personData.pmail}</span>
                </span>
              </p>
              <p>
                <a href={personData.glink}>
                  <img
                    src={github}
                    alt=""
                    className="github"
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>
              </p>
              <p>
                <a href={personData.link}>
                  <img
                    src={Linkedin}
                    alt=""
                    className="linked-image"
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>
              </p>
              <p>
                <a href={personData.blink}>
                  <img
                    src={behance}
                    alt=""
                    className="behance"
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>
              </p>
            </div>
          </div>

          {/* ============================================================================= */}
        </div>
        {/* =====================right side card details, on click of ABOUT ========================= */}
        <div className="content-details">
          {activeContent === "about" && (
            <div className="content-section">
              {personData.about?.academicInfo && (
                <>
                  <h3>About</h3>
                  <p>{renderBulletPoints(personData.about.me)}</p>
                </>
              )}
              {personData.about?.academicInfo && (
                <>
                  <h3>Academic Info</h3>
                  <p>{renderBulletPoints(personData.about.academicInfo)}</p>
                </>
              )}
              {personData.about?.aboutMe && (
                <>
                  <h3>About Me</h3>
                  <p>{personData.about.aboutMe}</p>
                </>
              )}
            </div>
          )}
          {/* =====================right side card details, on click of RESEARCH ========================= */}
          {activeContent === "research" && (
            <div className="content-section">
              {personData.research_interest?.area_title && (
                <>
                  <h3>Research Area & Title </h3>
                  <p>
                    {renderBulletPoints(
                      personData.research_interest.area_title
                    )}
                  </p>
                </>
              )}
              {personData.research_interest?.fiele_of_interest && (
                <>
                  <h3>Field of interest</h3>
                  <p>
                    {renderBulletPoints(
                      personData.research_interest.fiele_of_interest
                    )}
                  </p>
                </>
              )}
            </div>
          )}
          {/* =====================right side card details, on click of PUBLICATIONS ========================= */}
          {activeContent === "publications" && (
            <div className="content-section">
              {personData.publications?.paper_published && (
                <>
                  <h3>Paper Publications</h3>
                  <p>
                    {renderBulletPoints(
                      personData.publications.paper_published
                    )}
                  </p>
                </>
              )}
              {personData.publications?.projects && (
                <>
                  <h3>Projects</h3>
                  <p>{renderBulletPoints(personData.publications.projects)}</p>
                </>
              )}
              {personData.publications?.patterns && (
                <>
                  <h3>Patterns</h3>
                  <p>{renderBulletPoints(personData.publications.patterns)}</p>
                </>
              )}
            </div>
          )}
          {/* =====================right side card details, on click of PERSONAL ========================= */}
          {activeContent === "personal" && (
            <div className="content-section">
              {personData.personal_info?.work_experience && (
                <>
                  <h3>Work Experience</h3>

                  <p>
                    {renderBulletPoints(
                      personData.personal_info.work_experience
                    )}
                  </p>
                </>
              )}
              {personData.personal_info?.skill_expertise && (
                <>
                  <h3>Skill & Expertise </h3>
                  <p>
                    {renderBulletPoints(
                      personData.personal_info.skill_expertise
                    )}
                  </p>
                </>
              )}
              {personData.personal_info?.certifications && (
                <>
                  <h3>Certifications</h3>
                  <p>
                    {renderBulletPoints(
                      personData.personal_info.certifications
                    )}
                  </p>
                </>
              )}
              {personData.personal_info?.achievements && (
                <>
                  <h3>Achievements,Rewards & Recognition</h3>
                  <p>
                    {renderBulletPoints(personData.personal_info.achievements)}
                  </p>
                </>
              )}
              {personData.personal_info?.membership && (
                <>
                  <h3>Memberships</h3>
                  <p>
                    {renderBulletPoints(personData.personal_info.membership)}
                  </p>
                </>
              )}
              {personData.personal_info?.hobbies && (
                <>
                  <h3>Hobbies</h3>
                  <p>{renderBulletPoints(personData.personal_info.hobbies)}</p>
                </>
              )}
              {personData.personal_info?.snippet && (
                <>
                  <h3>Personal Snippet</h3>
                  <p>{personData.personal_info.snippet}</p>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      {/* ============================================================================= */}
    </div>
  );
}

export default CardDetails;
