// This Program is for people page
//Author Name: Jaishana Bindhu Priya
//Last Modified:

//========= Headers
import React, { useState, useEffect } from "react"; //reactjs componenets
import "./People.css"; //styling for people page
import Prof from "./images/Prof.png"; //prof picture
import { useLocation } from "react-router-dom"; //to navigate within the page
import Linkedin from "./images/Linkedin.png"; //linkedin icon
import Email from "./images/Email.png"; //email icon
import phone from "./images/phone.png"; //phone icon
import axios from "axios"; //api to fetch data
import github from "./images/github.png"; //github image
import behance from "./images/behance.svg"; //behance image
//=========End Headers

// This code defines a constructor function called People.
function People() {
  // This code uses the useState hook to create a state variable called personData, initialized as an empty array, and a setter function setPersonData.
  const [personData, setPersonData] = useState([]);
  // This code is using the `useLocation` hook from a library or framework to get the current location of the user in the application.
  const location = useLocation();

  // This code is using the useEffect hook to perform side effects in a functional component.
  useEffect(() => {
    // This code defines an asynchronous function called fetchPeopleData that likely fetches data about people from an external source.
    async function fetchPeopleData() {
      // This code is using a try-catch block to handle any errors that may occur within the try block.
      try {
        // This code uses the axios library to make an HTTP GET request to the specified URL and retrieves data from the "/api/person/" endpoint.
        const response = await axios.get("http://127.0.0.1:8000/api/person/");
        // // Logs the response data from the API endpoint, replace with the actual API endpoint to fetch and display the data.
        console.log(response.data); 
        // Sets the person data to the response data received from an API call.
        setPersonData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
// This code calls a function named fetchPeopleData to retrieve data about people.
    fetchPeopleData();
  }, []);
// Runs a side effect function after every render, similar to componentDidMount and componentDidUpdate in class components.
  useEffect(() => {
    // This code logs a message indicating that the location has changed, along with the value of the location variable.
    console.log("Location changed:", location);
    // This code retrieves the hash value from the current URL and assigns it to the variable 'hash'.
    const hash = location.hash;
    if (hash) {
      // Adds an event listener to the window object that triggers a callback function when the page finishes loading.
      window.addEventListener("load", () => {
        // Selects the first element in the document that matches the given CSS selector and assigns it to the variable "element".
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
  // Filters an array of person data to only include objects representing PhD students.
  const phdStudents = personData.filter(
    (student) => student.student_type === "PhD"
  );
  // Filters an array of person data to only include students from the "Mtech" program.
  const mtechStudents = personData.filter(
    (student) => student.student_type === "MTech"
  );
  // Filters an array of person data to only include project associates.
  const researchAssociates = personData.filter(
    (student) => student.student_type === "RA"
  );
  // Filters an array of person data to only include objects representing interns.
  const interns = personData.filter(
    (student) => student.student_type === "Intern"
  );
  // Filters an array of person data to only include alumni phd.
  const alumnip = personData.filter(
    (student) => student.student_type === "Alumni(P)"
  );
  // Filters an array of person data to only include objects with the property "alumni metech" set to true.
  const alumnim = personData.filter(
    (student) => student.student_type === "Alumni(M)"
  );
// Filters the array of interns and returns a new array containing only the interns who are currently working.
  const nowInterns = interns.filter(
    (student) => student.endMonth_display === "Now"
  );
  // Filters the array of interns and returns a new array called otherInterns with only the elements that are not working currently and have a image
  const otherInterns = interns.filter(
    (student) => student.endMonth_display !== "Now"
  );
  // Filters the array of interns and returns a new array containing only the interns that dont have an image 
  const oldInterns = interns.filter(
    (student) => !student.ppic || student.ppic === ""
  );
// Filters the array `researchAssociates` to only include the elements that satisfy the condition of currently working
  const nowresearchAssociates = researchAssociates.filter(
    (student) => student.endMonth_display === "Now"
  );
  // Filters out project associates who are not currently working project  associates.
  const otherresearchAssociates = researchAssociates.filter(
    (student) => student.endMonth_display !== "Now"
  );

  return (
    <div className="body">
      <div className="lines-container">
        <div className="line"></div>

        <div className="line"></div>
      </div>
      <section id="section-zero">
        {/* ==================== Professor section ========================== */}
        {/* hardcoded data of professor, the left side white card */}
        <p className="phd-text2">Professor</p>
        <div className="lines-container">
          <div className="line"></div>
        </div>
        <div className="gridd">
          <div className="colu">
            <div className="img2">
              <img src={Prof} alt="Card Image" />
            </div>
            <div className="card-content">
              <h3>Dibakar Sen</h3>
              <p>
                <img src={Email} alt="mail" className="cardicon2" />: 
                dibakar@iisc.ac.in
              </p>
              <p>
                <img src={phone} alt="ph" className="cardicon2" />: +91 80 2293
                3230
              </p>
            </div>

            <a href="https://www.linkedin.com/in/dibakar-sen-9387b534/">
              <img src={Linkedin} alt="" className="linked-image" />
            </a>
          </div>
          <div className="colu">
            {/* the right side column of professor's data */}
            <div className="firstcol">
              <h2>Research Areas</h2>
              <ul>
                <li>Applied geometry</li>
                <li>Theoretical and computational kinematics</li>
                <li>Mechanisms</li>
                <li>CAD</li>
                <li>VR/Haptics</li>
                <li>Shape understanding</li>
                <li>Assembly modeling and planning</li>
                <li>Computational ergonomics</li>
                <li>Digital human modeling</li>
                <li>3D product sketching</li>
              </ul>

              <div className="lline"></div>
    
              <h2>Academic Info</h2>
              <ul>
                <li>PhD, IISc, Bangalore, 1997</li>
                <li>MSc (Engg.), IISc, Bangalore, 1992</li>
                <li>BE, REC Durgapur, Burdwan University (WB), 1989</li>
              </ul>
              <div className="lline"></div>
              <h2>Teaching</h2>
              <ul>
                <li>ME 295 Geometric Modeling for CAD</li>
                <li>PD 231 Mechanism Design</li>
                <li>PD 235 Applied Ergonomics</li>
              </ul>
            </div>

            <div className="secondcol">
              <h2>Fields of Interest</h2>
              <ul>
                <li>Geometric and Topological Modeling</li>
                <li>Digital Human Modeling and Posturing</li>
                <li>Geometric and Functional Vision Modeling</li>
                <li>Natural Behaviour and Grasp Modeling</li>
                <li>Kinematic Assembly Modeling</li>
                <li>Deployable Antenna Mechanisms</li>
                <li>Underactuated and Spring Actuated Mechanisms</li>
                <li>Pseudo-Spatial Mechanisms and Patterns</li>
                <li>Assembly Sequencing</li>
                <li>Flexible Assembly, Routing, and Harnessing</li>
                <li>Feature Based Registration</li>
                <li>Statistical Shape Modeling</li>
                <li>Haptic Array Systems Design</li>
                <li>Mechanism Modeling and Design</li>
                <li>Mobility of Smooth Contacting Objects</li>
                <li>Design for Additive Manufacturing of Articulation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ============================================== */}
      </section>

      <br />
      {/* ==================== PH.D students========================== */}
      <section id="section-one">
        <p className="phd-text2">Ph.D Students</p>
        <div className="grid">
          {/*Reverses the order of the phdStudents array and maps each student to a new array, with their index as a parameter */}
          {phdStudents.reverse().map((student, index) => (
           
            <div className="col" key={index}>   {/* the white card containing details */}
              {/*This code generates a link to a specific student's details page using their ID as a parameter in the URL */}
              <a href={`/card-details/${student.id}`}>
                <img
                  src={"http://127.0.0.1:8000" + student.ppic}
                  alt=""
                  className="img2"
                />
                <div className="card-content">
                  <h3>{student.pname}</h3>
                  <p>
                    {" "}
                    <span> Research Area: </span>
                    {student.researcharea}
                  </p>
                  <p>
                    {" "}
                    <span> Research Title: </span>
                    {student.researchtitle}
                  </p>
                </div>
              </a>
              {/* the part containing all social icons and links to the respective */}
              <div className="socialss">
                <span className="email-container">
                  <img src={Email} alt="mail" className="cardicon" />
                  <span className="email-text">{student.pmail}</span>
                </span>

                <a href={student.glink}>
                  <img
                    src={github}
                    alt=""
                    className="github"
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>
                <a href={student.link}>
                  <img
                    src={Linkedin}
                    alt=""
                    className="linked-image"
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>
                <a href={student.blink}>
                  <img
                    src={behance}
                    alt=""
                    className="behance"
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>
              </div>
            </div>
          ))}

          {/* ============================================== */}
        </div>
      </section>
      <section id="section-two">
        {/* ==================== Masters students  ========================== */}
        <p className="phd-text2">Masters Students</p>
        <div class="grid">
          {/*Maps over the mtechStudents array and returns a new array with the result of calling the provided function on each element */}
          {mtechStudents.map((student, index) => (
            <div className="col" key={index}>  {/* the white card containing details */}
              {/*This code generates a link to a specific student's details page using their ID as a parameter in the URL */}
              <a href={`/card-details/${student.id}`}>
                <img
                  src={"http://127.0.0.1:8000" + student.ppic}
                  alt=""
                  className="img2"
                />
                <div className="card-content">
                  <h3>{student.pname}</h3>
                </div>
              </a>
               {/* the part containing all social icons and links to the respective */}
              <div className="socialss">

                <span className="email-container">
                  <img src={Email} alt="mail" className="cardicon" />
                  <span className="email-text">{student.pmail}</span>
                </span>

                <a href={student.glink}>
                  <img
                    src={github}
                    alt=""
                    className="github"
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>
                <a href={student.link}>
                  <img
                    src={Linkedin}
                    alt=""
                    className="linked-image"
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>
                <a href={student.blink}>
                  <img
                    src={behance}
                    alt=""
                    className="behance"
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>
              </div>
              {/* ============================================== */}
            </div>
          ))}
        </div>
      </section>
      <section id="section-three">
        {/* ==================== Project assistants  ========================== */}
        <p className="phd-text2">Project Assistants</p>
        <div className="grid">
          {/*Maps over an array of research associates, returning a new array with each student's name and index as a string */}
          {nowresearchAssociates.map((student, index) => (
            <div className="colp" key={index}>  {/* the white card containing details */}
              <img
                src={"http://127.0.0.1:8000" + student.ppic}
                alt=""
                className="img2"
              />
              <div className="card-content">
                <h3>{student.pname}</h3>

                <p>
                  <span>Duration: </span>
                  {student.startMonth_display} {student.startYear} -{" "}
                  {student.endMonth_display} {student.endYear}
                </p>
                <p>
                  <span>Role:</span> {student.role}
                </p>
              </div>
 {/* the part containing all social icons and links to the respective */}
              <div className="socialss">
                <span className="email-container">
                  <img src={Email} alt="mail" className="cardicon" />
                  <span className="email-text">{student.pmail}</span>
                </span>

                <a href={student.glink}>
                  <img
                    src={github}
                    alt=""
                    className="github"
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>
                <a href={student.link}>
                  <img
                    src={Linkedin}
                    alt=""
                    className="linked-image"
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div class="grid">
          {/*Maps over an array of research associates and returns a new array with each student's name and index as a string */}
          {otherresearchAssociates.map((student, index) => (
            <div className="colp" key={index}>  {/* the white card containing details */}
              <img
                src={"http://127.0.0.1:8000" + student.ppic}
                alt=""
                className="img2"
              />
              <div className="card-content">
                <h3>{student.pname}</h3>

                <p>
                  {" "}
                  <span>Duration: </span>
                  {student.startMonth_display} '{student.startYear.slice(-2)} -{" "}
                  {student.endMonth_display} '{student.endYear.slice(-2)}
                </p>
                <p>
                  <span>Role: </span>
                  {student.role}
                </p>
              </div>
               {/* the part containing all social icons and links to the respective */}

              <div className="socialss">
                <span className="email-container">
                  <img src={Email} alt="mail" className="cardicon" />
                  <span className="email-text">{student.pmail}</span>
                </span>

                <a href={student.glink}>
                  <img
                    src={github}
                    alt=""
                    className="github"
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>
                <a href={student.link}>
                  <img
                    src={Linkedin}
                    alt=""
                    className="linked-image"
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>
              </div>
            </div>
          ))}

          {/* ============================================== */}
        </div>
      </section>
      <section id="section-four">
        {/* ==================== Alumni ph.d ========================== */}
        <p className="phd-text2">Alumni (Ph.D)</p>
        <div className="grid">
          {/*This code is using the map function to iterate over an array of alumni students and return a new array with some modifications */}
          {alumnip.map((student, index) => (
            
            <div className="colp" key={index}>  {/* the white card containing details */}
              <img
                src={"http://127.0.0.1:8000" + student.ppic}
                alt=""
                className="img2"
              />
              <div className="card-content">
                <h3>{student.pname}</h3>

                {student.startYear && (
                  <p>
                    {" "}
                    <span>Completion Year:</span>
                    {student.startYear}
                  </p>
                )}

                {student.program && (
                  <p>
                    <span>Program: </span>
                    {student.program}
                  </p>
                )}
                {student.dept && (
                  <p>
                    <span>Department: </span>
                    {student.dept}
                  </p>
                )}
                {student.thesisTitle && (
                  <p>
                    <span>Thesis Title: </span>
                    <br></br> {student.thesisTitle}
                  </p>
                )}
                {student.nowAt && (
                  <p>
                    <span>Now @</span> {student.nowAt}
                  </p>
                )}
              </div>
               {/* the part containing all social icons and links to the respective */}

              <div className="socialss">
                <span className="email-container">
                  <img src={Email} alt="mail" className="cardicon" />
                  <span className="email-text">{student.pmail}</span>
                </span>

                <a href={student.link}>
                  <img
                    src={Linkedin}
                    alt=""
                    className="linked-image"
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* ============================================== */}
      </section>
      <section id="section-five">
        {/* ==================== Alumni Masters ========================== */}
        <p className="phd-text2">Alumni (Masters)</p>
        <div class="grid">
          {/*This code is using the map function to iterate over an array of alumni students and return a new array with some modifications */}
          {alumnim.map((student, index) => (
            <div className="colp" key={index}>  {/* the white card containing details */}
              <img
                src={"http://127.0.0.1:8000" + student.ppic}
                alt=""
                className="img2"
              />
              <div className="card-content">
                <h3>{student.pname}</h3>

                <p>
                  <span>Completion Year: </span>
                  {student.startYear}
                </p>

                <p>
                  <span>Project Title: </span>
                  <br></br> {student.projectTitle}
                </p>
              </div>
               {/* the part containing all social icons and links to the respective */}

              <div className="socialss">
                <span className="email-container">
                  <img src={Email} alt="mail" className="cardicon" />
                  <span className="email-text">{student.pmail}</span>
                </span>

                <a href={student.link}>
                  <img
                    src={Linkedin}
                    alt=""
                    className="linked-image"
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* ============================================== */}
      </section>
      <section id="section-six">
        {/* ==================== Interns ========================== */}
        <p className="phd-text2">Interns</p>
        <div className="grid">
          {/*Maps over the nowInterns array and returns a new array with each student's name and index as a string */}
          {nowInterns.map((student, index) => (
            <div className="colp" key={index}>  {/* the white card containing details */}
              <img
                src={"http://127.0.0.1:8000" + student.ppic}
                alt=""
                className="img2"
              />
              <div className="card-content">
                <h3>{student.pname}</h3>
                <p>
                  <p>
                    <span>Duration: </span> {/* displays only last two digits of the year*/}
                    {student.startMonth_display} '{student.startYear.slice(-2)}-
                    {student.endMonth_display} '{student.endYear.slice(-2)}
                  </p>
                  <p>
                    <span>Project Name: </span>
                    <br></br>
                    {student.project}
                  </p>
                </p>
              </div>
               {/* the part containing all social icons and links to the respective */}

              <div className="socialss">
                <span className="email-container">
                  <img src={Email} alt="mail" className="cardicon" />
                  <span className="email-text">{student.pmail}</span>
                </span>

                <a href={student.glink}>
                  <img
                    src={github}
                    alt=""
                    className="github"
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>
                <a href={student.link}>
                  <img
                    src={Linkedin}
                    alt=""
                    className="linked-image"
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div class="grid">
          {/*This code is using a for loop to iterate over an array and check if each element is equal to a specific value. It returns true if any element matches, otherwise false */}
          {otherInterns
            .filter((student) => student.ppic && student.ppic !== "")
            .map((student, index) => (
              <div className="colp" key={index}>  {/* the white card containing details */}
                <img
                  src={"http://127.0.0.1:8000" + student.ppic}
                  alt=""
                  className="img2"
                />
                <div className="card-content">
                  <h3>{student.pname}</h3>
                  <p>
                    <p>
                      <span>Duration: </span>  {/* displays only last two digits of the year*/}
                      {student.startMonth_display} '
                      {student.startYear.slice(-2)}-{student.endMonth_display} '
                      {student.endYear.slice(-2)}
                    </p>
                    <p>
                      <span>Project Name:</span> <br></br>
                      {student.project}
                    </p>
                  </p>
                </div>
                 {/* the part containing all social icons and links to the respective */}

                <div className="socialss">
                  <span className="email-container">
                    <img src={Email} alt="mail" className="cardicon" />
                    <span className="email-text">{student.pmail}</span>
                  </span>

                  <a href={student.glink}>
                    <img
                      src={github}
                      alt=""
                      className="github"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </a>
                  <a href={student.link}>
                    <img
                      src={Linkedin}
                      alt=""
                      className="linked-image"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </a>
                </div>
              </div>
            ))}
        </div>
        <div class="grid">
          {/*Maps over an array of old interns and returns a new array with the result of calling a function on each element, along with its index., and if it contains no image*/}
          {oldInterns.map((student, index) => (
            <div className="colp" key={index}>  {/* the white card containing details */}
              <img
                src={"http://127.0.0.1:8000" + student.ppic}
                alt=""
                className="img2"
              />
              <div className="card-content">
                <h3>{student.pname}</h3>
                <p>
                  <p>
                    <span>Duration: </span>  {/* displays only last two digits of the year*/}
                    {student.startMonth_display} '{student.startYear.slice(-2)}-
                    {student.endMonth_display} '{student.endYear.slice(-2)}
                  </p>
                  <p>
                    <span>Project Name:</span> <br></br>
                    {student.project}
                  </p>
                </p>
              </div>
               {/* the part containing all social icons and links to the respective */}

              <div className="socialss">
                <span className="email-container">
                  <img src={Email} alt="mail" className="cardicon" />
                  <span className="email-text">{student.pmail}</span>
                </span>

                <a href={student.glink}>
                  <img
                    src={github}
                    alt=""
                    className="github"
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>
                <a href={student.link}>
                  <img
                    src={Linkedin}
                    alt=""
                    className="linked-image"
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* ============================================= */}
      </section>
    </div>
  );
}

export default People;
