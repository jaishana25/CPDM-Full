import React from 'react';
import './Footer.css';
import cpdmlogo from './images/cpdmlogo.png';
import IISclogo from './images/IISclogo.png';
import Twitter from './images/Twitter.png';
import Instagram from './images/Instagram.png';
import Linkedin from './images/Linkedin.png';
import Facebook from './images/Facebook.png';
import SCALE from './images/SCALE.png';
import mech from './images/mech.png';


function Footer() {
  return (
    <div>     
    <footer className="footer">
        <div className="container2">
            <div className="row">
                <div className="footer-col">
                <ul>
                    <li><a href="about"> <u>About us</u></a></li>
                    <li><a href="contact"><u>Contact us</u> </a></li>
                    <li><a href="join"> <u>Join us</u> </a></li>
                    <li><a href="research"><u> Research areas</u> <br/><br/><br/></a></li>
                    <div className="logo-containers">
                    <li>  <img src={cpdmlogo} alt="CPDM Logo" width="50px" className="logo" /></li>
                    <li> <img src={IISclogo} alt="IISc Logo" width="70px" className='iiscclogo' /></li>
                    <li> <img src={SCALE} alt="CPDM Logo" width="70px" className="sclogo" /></li>


                    </div> 
                    <div className='logo-containers'>
                    <li> <img src={mech} alt="CPDM Logo" width="70px" className="mclogo" /></li>
                    <li> <img src={SCALE} alt="CPDM Logo" width="60px" className="oclogo" /></li>
                    </div>
                </ul>
            </div>
            <div className="footer-col">
            <ul>
                    <li><a href="#"> Get Social </a></li>
                    <li><div className='socialmedia'>
                        <p><img src={Linkedin} alt=""/></p>
                        <p><img src={Twitter} alt=""/></p>
                        <p><img src={Instagram} alt=""/></p>
                        <p><img src={Facebook} alt=""/></p>
                        </div></li>
                    <li><a href="https://iisc.ac.in/"> <u>https://iisc.ac.in/ </u></a></li>
                    <li><a href=" https://cpdm.iisc.ac.in/cpdm/"><u>https://cpdm.iisc.ac.in/cpdm/</u> </a></li>
                    <li><a href="https://mecheng.iisc.ac.in/ "> <u> https://mecheng.iisc.ac.in/ </u></a></li>

                </ul>


            </div>
            <div className="footer-col">
            <ul>
                <li><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.322361613899!2d77.56553077547854!3d13.01513211392152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d38c0e294d%3A0x1adc73f47b7773c0!2sCentre%20for%20Product%20Design%20and%20Manufacturing%20(CPDM)!5e0!3m2!1sen!2sin!4v1688638898740!5m2!1sen!2sin" width="350" height="250" class="google-map-iframe" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe></li>
                
                   
                </ul>

              
            </div>
            </div>
            
        </div>
   
   </footer>
   <footer className="footer2">
     <small className="footertext">SCALE LAB-CPDM-IISC @2023. All rights reserved. Website Designed,Developed and Maintained by  <a href="https://www.linkedin.com/in/jaishana-bindhu-priya-636130228/" className="white-link">Jaishana Bindhu Priya </a>and   <a href="https://www.linkedin.com/in/jaishana-bindhu-priya-636130228/" className="white-link">Sankar </a></small>

   </footer></div>
  )
}

export default Footer