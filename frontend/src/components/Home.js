// This Program is for home page
//Author Name: Jaishana Bindhu Priya
//Last Modified:

//========= Headers
import React from "react"; //reactjs components
import "./Home.css"; //styling home page
import human from "./images/human.png"; //the human model image
import Rectangle24 from "./images/Rectangle24.png"; //the rectangles in the design below slider
import login from "./images/login.png"; //login image
import about from "./images/about.png"; //about image
import contactt from "./images/contactt.png"; //join us image
import rect from "./images/rect.png"; //rect in the design
import rectb from "./images/rectb.png"; //another rect in design
import ImageSlider from "./ImageSlider"; // Import the ImageSlider component
import { SliderData } from "./SliderData"; // the images used in the sliding carousel
//=========End Headers

function Home() {
  return (
    <div>
      {/* ===================== home page, sliding carousel ========================= */}

      <img src={human} alt="Image" className="left-image" />
      <ImageSlider slides={SliderData} /> {/* the sliding image carousel */}

      {/* ============================================== */}
      <a href="/join">
      <div className="second-box">
     
        <p>Join Us</p>
      
      </div>
      </a>
      

      <div className="box2">{/* the white box which holds all the three components */}
        <div className="background-image"></div>
        {/* <img src={rect} alt="rectt" className='rectu'/> */}

        <div className="gridsss">
          <div className="coll2"> {/* the blue box which has welcome details */}
            {/* =====================welcome page details card========================= */}

            <b>Welcome</b>
            <p>
              Applied Geometry and Mechanisms Laboratory (AGML) and Computerized
              Anthropometry and Ergonomics Simulation Lab (SCALE) are research
              units, headed by Prof. Dibakar Sen, at Department of Mechanical
              Engineering and Department of Design & Manufacturing respectively.
              Our aim is understanding shape, motion and their interactions
              using the knowledge of geometry, topology, kinematics and allied
              subjects.
            </p>
          </div>

          <div className="coll2">{/* the blue box which has paradigm details */}
            <img src={rect} alt="rectt" className="rectu" />

            <b>Paradigm</b>
            <p>
              "Geometry rules mechanical behaviour "<br />
              "Geometry is the medium of experience and expression of physical
              phenomena"
            </p>
          </div>
          <img src={rect} alt="rectt" className="recti" />
          <img
            src={rectb}
            alt="rectb"
            className="rectb"
            style={{ position: "absolute", zIndex: "1" }}
          />

          <div className="coll2"> {/* the blue box which has objective details */}
            <b>Objective</b>
            <p>
              Develop novel methods for shape representation and motion
              realization. Develop intutive methods for assembly and kinematic
              models of mechanical assemblies. Recognise non-intutive scenarios
              of mechanical behaviour
            </p>
          </div>
        </div>

        {/* ============================================== */}
      </div>
      <div className="box3">
        {/* =====================the below box for navigating to about us, join us and login page========================= */}

        <div className="rec-bg">
          <img src={Rectangle24} alt="rec" className="rec" />
        </div>
        <div className="grid-box">
          <div className="cardi">
            {" "}
            <a href="/about">
              {" "}
              <img src={about} alt="ab" /> <br /> <b>About Us</b>{" "}
            </a>{" "}
          </div>
          <div className="cardi">
            {" "}
            <a href="/join">
              {" "}
              <img src={contactt} alt="con" /> <br /> <b>Join Us</b>
            </a>
          </div>
          <div className="cardi">
            <img src={login} alt="lo" /> <br /> <b>Login</b> <br />{" "}
            <p>(Only for internal purposes)</p>
          </div>
        </div>
      </div>
      {/* ============================================== */}
    </div>
  );
}

export default Home;
