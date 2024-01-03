// This Program is for the footer which appears in every page
//Author Name: Jaishana Bindhu Priya
//Last Modified:

//========= Headers
import React from "react"; //reactjs components
import "./Footer.css"; //styling of footer page
import cpdmlogo from "./images/cpdmlogo.png"; //cpdm logo
import IISclogo from "./images/IISclogo.png"; // iisc logo
import Twitter from "./images/Twitter.png"; //twitter logo
import Instagram from "./images/Instagram.png"; //instagram logo
import Linkedin from "./images/Linkedin.png"; // linked in logo
import Facebook from "./images/Facebook.png"; // facebook logo
import SCALE from "./images/SCALE.png"; //scale logo
import mech from "./images/mech.png"; // mech logo
//=========End Headers

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container2">
          <div className="row">
            {/* =====================leftmost column of footer ========================= */}
            <div className="footer-col">
              <ul>
                <li>
                    {/* on click of about takes to about page */}
                  <a href="about">
                    {" "}
                    <u>About us</u>
                  </a>
                </li>

                <li>
                      {/* on click of join us takes to join page */}
                  <a href="join">
                    {" "}
                    <u>Join us</u>{" "}
                  </a>
                </li>
                <li>
                      {/* on click of research areas takes to research page */}
                  <a href="research">
                    <u> Research areas</u> <br />
                    <br />
                    <br />
                  </a>
                </li>

                {/*  the logos below */}
                <div className="logo-containers">
                  <li>
                    {" "}
                    <img
                      src={cpdmlogo}
                      alt="CPDM Logo"
                      width="50px"
                      className="logo"
                    />
                  </li>
                  <li>
                    {" "}
                    <img
                      src={IISclogo}
                      alt="IISc Logo"
                      width="70px"
                      className="iiscclogo"
                    />
                  </li>
                  <li>
                    {" "}
                    <img
                      src={SCALE}
                      alt="CPDM Logo"
                      width="70px"
                      className="sclogo"
                    />
                  </li>
                </div>
                <div className="logo-containers">
                  <li>
                    {" "}
                    <img
                      src={mech}
                      alt="CPDM Logo"
                      width="70px"
                      className="mclogo"
                    />
                  </li>
                  <li>
                    {" "}
                    <img
                      src={SCALE}
                      alt="CPDM Logo"
                      width="60px"
                      className="oclogo"
                    />
                  </li>
                </div>
                {/* ======================================================================= */}
              </ul>
            </div>
            <div className="footer-col">
              {/* =====================center column of footer ========================= */}
              <ul>
                <li>

                    {/* on click of social media icon links to that respective social media */}
                  <a href="#"> Get Social </a>
                </li>
                <li>
                  <div className="socialmedia">
                    <p>
                      <img src={Linkedin} alt="" />
                    </p>
                    <p>
                      <img src={Twitter} alt="" />
                    </p>
                    <p>
                      <img src={Instagram} alt="" />
                    </p>
                    <p>
                      <img src={Facebook} alt="" />
                    </p>
                  </div>
                </li>
                <li>
                    {/* website links, on click redirects */}
                  <a href="https://iisc.ac.in/">
                    {" "}
                    <u>https://iisc.ac.in/ </u>
                  </a>
                </li>
                <li>
                  <a href=" https://cpdm.iisc.ac.in/cpdm/">
                    <u>https://cpdm.iisc.ac.in/cpdm/</u>{" "}
                  </a>
                </li>
                <li>
                  <a href="https://mecheng.iisc.ac.in/ ">
                    {" "}
                    <u> https://mecheng.iisc.ac.in/ </u>
                  </a>
                </li>
                {/* ======================================================================= */}
              </ul>
            </div>
            <div className="footer-col">
              {/* =====================righmost column of footer ========================= */}
              <ul>
                <li>
                    {/* google maps api called and displayed, appearance mdoified in google-map-iframe class */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.322361613899!2d77.56553077547854!3d13.01513211392152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d38c0e294d%3A0x1adc73f47b7773c0!2sCentre%20for%20Product%20Design%20and%20Manufacturing%20(CPDM)!5e0!3m2!1sen!2sin!4v1688638898740!5m2!1sen!2sin"
                    width="350"
                    height="250"
                    class="google-map-iframe"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </li>
              </ul>

              {/* ======================================================================= */}
            </div>
          </div>
        </div>
      </footer>
      {/* =====================bottom bar of footer ========================= */}
      <footer className="footer2">
        <small className="footertext">
            

          SCALE LAB-CPDM-IISC @2023. All rights reserved. Website
          Designed,Developed and Maintained by{" "}
          <a
            href="https://www.linkedin.com/in/jaishana-bindhu-priya-636130228/"
            className="white-link"
          >
            {" "}
            Jaishana{" "}
          </a>
          and{" "}
          <a href="https://www.linkedin.com/in/sankar4/" className="white-link">
            Sankar{" "}
          </a>
        </small>
      </footer>

      {/* ======================================================================= */}
    </div>
  );
}

export default Footer;
