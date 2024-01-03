// This Program is for the header, appearing in every page
//Author Name: Jaishana Bindhu Priya
//Last Modified:

//========= Headers
import React from "react"; //reactjs components
import "./Header.css"; //styling header page
import cpdmlogo from "./images/cpdmlogo.png"; //cpdm logo
import IISclogo from "./images/IISclogo.png"; //iisc logo
import { Link, useLocation } from "react-router-dom"; // to route to different page from nav bar
import SCALE from "./images/SCALE.png"; //scale logo
import { GiHamburgerMenu } from "react-icons/gi"; //hamburger icon when on mobile dimensions
//=========End Headers

function Header() {
  // This code uses the `useLocation` hook from React Router to get the current location object, which contains information about the current URL.
  const location = useLocation();

  return (
    <div>
      <header className="App-header">
        <div>
          {/* =====================top header left side ========================= */}

          <nav className="navbar">
            <ul id="navbar-elements">
              <li>
                <div className="one">
                  <img src={SCALE} alt="CPDM Logo" className="slogo" />
                  <p className="logo-text"> 
                    COMPUTERIZED ANTHROPOMETRY AND
                    <br />
                    ERGONOMICS SIMULATION LAB (SCALE)
                    <br />
                    Department of Design & Manufacturing <br></br>
                    <span className="smallfont">(Erstwhile CPDM)</span>
                  </p>
                  {/* ============================================== */}
                </div>
                {/* =====================middle part, iisc logo========================= */}
              </li>

              <li className="iisclogo">
                {" "}
                <img
                  src={IISclogo}
                  alt="IISc Logo"
                  width="100px"
                  className="iisclogo"
                />
              </li>

              <li>
                {/* ============================================== */}
                {/* =====================top header right side ========================= */}
                <div className="two">
                  <p className="logo-text">
                    APPLIED GEOMETRY AND MECHANISMS <br />
                    LAB (AGML) <br /> Department of Mechanical Engineering
                  </p>
                  <img
                    src={cpdmlogo}
                    alt="CPDM Logo"
                    width="80px"
                    className="logo"
                  />
                </div>
                {/* ============================================== */}
              </li>
            </ul>
          </nav>
        </div>

        <nav>
          {/* =====================Navbar ========================= */}
          <div className="navbarmain">
            <GiHamburgerMenu className="hamburger" />
            <ul className="navbarmain-elements"> 
              <li>
                {/*} This code is using the 'Link' component from the 'react-router-dom' library to create a clickable link that navigates to the specified URL. */}
                <Link
                  to="/"
                  className={location.pathname === "/" ? "active" : ""}
                >
                  HOME
                </Link>
              </li>

              <li>
                <Link
                  to="/people"
                  className={location.pathname === "/people" ? "active" : ""}
                >
                  PEOPLE
                </Link>
                {/* This code defines a dropdown menu component with a class name of "dropdown_menu".*/}
                <div className="dropdown_menu">
                  <ul>
                    <li>
                      <a href="#section-zero">Faculty</a>
                    </li>
                    <li>
                      <a href="/people#section-one">Ph.D Students</a>
                    </li>
                    <li>
                      <a href="/people#section-two">Masters Students</a>
                    </li>
                    <li>
                      <a href="/people#section-three">Project Assistants</a>
                    </li>
                    <li>
                      <a href="/people#section-four">Alumni (Ph.D)</a>
                    </li>
                    <li>
                      <a href="/people#section-five">Alumni (Masters)</a>
                    </li>
                    <li>
                      <a href="/people#section-six">Interns</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                {/* the main activities page */}
                <Link
                  to="/activities"
                  className={
                    location.pathname === "/activities" ? "active" : ""
                  }
                >
                  ACTIVITIES
                </Link>
                {/*drop dowm menu of activities */}
                <div className="dropdown_menu">
                  <ul>
                    <li>
                      <Link to="/activities">Designed Products</Link>
                    </li>
                    <li>
                      <a href="/activities#spons">Sponsored Projects</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                {/* the main page of publications */}
                <Link
                  to="/journal"
                  className={location.pathname === "/journal" ? "active" : ""}
                >
                  PUBLICATIONS
                </Link>
                {/* the dropdown menu of poublications page*/}
                <div className="dropdown_menu">
                  <ul>
                    <li>
                      <a href="/journal#journal-sec">Journal Publications</a>
                    </li>
                    <li>
                      <li>
                        <a href="/journal#conf-sec">
                          Conferences,Books and symposia
                        </a>
                      </li>
                      <a href="/journal#pat-sec">Patents</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                {/* the main page of gallery */}
                <Link
                  to="/gallery"
                  className={location.pathname === "/gallery" ? "active" : ""}
                >
                  GALLERY
                </Link>
                {/* the drop dowmn fields of gallery */}

                <div className="dropdown_menu">
                  <ul>
                    <li>
                      <a href="/gallery#section-lab">Lab</a>
                    </li>
                    <li>
                      <a href="/gallery#section-articles">Latest News</a>
                    </li>
                    <li>
                      <a href="/gallery#section-events">Events</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                {/* the main research page */ }
                <Link
                  to="/research"
                  className={location.pathname === "/research" ? "active" : ""}
                >
                  RESEARCH
                </Link>
              </li>
            </ul>
          </div>
          {/* ====================================================================== */}
        </nav>
      </header>
    </div>
  );
}

export default Header;
