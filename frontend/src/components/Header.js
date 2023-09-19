import React from 'react';
import './Header.css';
import cpdmlogo from './images/cpdmlogo.png'
import IISclogo from './images/IISclogo.png';
import { Link, useLocation } from 'react-router-dom';
import SCALE from './images/SCALE.png';
import {GiHamburgerMenu} from 'react-icons/gi'


function Header(){
    // const [activeLink, setActiveLink] = useState('/');

    // const handleLinkClick = (event, link) => {
    //     event.preventDefault();
    //     setActiveLink(window.location.pathname);
    //     window.location.href = link; // Navigate to the specified link
    //   }
    const location = useLocation();


  return (
    <div>
      <header className='App-header'>
        <div>


          <nav className='navbar'>
            <ul id='navbar-elements'>
              <li >
                <div className='one' >
                  <img src={SCALE} alt="CPDM Logo" className="slogo" />
                  <p className="logo-text">
                    COMPUTERIZED ANTHROPOMETRY AND
                    <br />ERGONOMICS SIMULATION LAB (SCALE)<br />

                    Centre for Product Design & Manufacturing

                  </p>

                </div>
              </li>

              <li className='iisclogo'> <img src={IISclogo} alt="IISc Logo" width="100px" className="iisclogo" /></li>

              <li>

                <div className='two'>
                  <p className="logo-text" >
                    APPLIED GEOMETRY AND MECHANISMS <br />
                    LAB (AGML) <br /> Department of Mechanical Engineering
                  </p>
                  <img src={cpdmlogo} alt="CPDM Logo" width="80px" className="logo" />
                </div>

              </li>

            </ul>
          </nav>






        </div>


        <nav>

        <div className='navbarmain'>
            <GiHamburgerMenu className='hamburger'/>
            <ul className="navbarmain-elements">
              <li>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                  HOME
                </Link>

              </li>
          
              <li>
                <Link to="/people" className={location.pathname === '/people' ? 'active' : ''}>
                  PEOPLE
                </Link>
                <div className="dropdown_menu">
    <ul>
      <li>
        <a href="#section-zero">Faculty</a>
      </li>
      <li>
        <a href="#section-one">Ph.D students</a>
      </li>
      <li>
        <a href="#section-two">M.Des Students</a>
      </li>
      <li>
        <a href="#section-three">Research Associates</a>
      </li>
      <li>
        <a href="#section-four">Interns</a>
      </li>
      <li>
        <a href="/activities/music">Alumni</a>
      </li>
     
    </ul>
  </div>
              </li>
              <li>
                <Link to="/activities" className={location.pathname === '/activities' ? 'active' : ''}>
                  ACTIVITIES
                </Link>
                <div className="dropdown_menu">
    <ul>
      <li>
        <a href="#spons">Sponsored Projects</a>
      </li>
      <li>
        <Link to="/activities">Designs</Link>
      </li>
     
    </ul>
  </div>
                
        

                
               
              </li>
              
              <li>
                <Link to="/journal" className={location.pathname === '/journal' ? 'active' : ''}>
                  PUBLICATIONS
                </Link>
                <div className="dropdown_menu">
    <ul>
    <li>
        <a href="#journal-sec">Journal Publications</a>
      </li>
      <li>
      <li>
        <a href="#conf-sec">Conferences,Books and symposia</a>
      </li>
        <a href="#pat-sec">Patents</a>
      </li>
  
      
     
     
    </ul>
  </div>
              </li>
              <li>
                <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>
                  GALLERY
                </Link>

                <div className="dropdown_menu">
    <ul>
      <li>
        <a href="#section-lab">Lab</a>
      </li>
      <li>
        <a href="#section-articles">Latest News</a>
      </li>
      <li>
        <a href="#section-events">Events</a>
      </li>
     
     
    </ul>
  </div>
              </li>
              <li>
                <Link to="/research" className={location.pathname === '/research' ? 'active' : ''}>
                  RESEARCH
                </Link>
              </li>
      
            </ul>
          </div>

        </nav>
      </header>
    </div>
  )
}

export default Header