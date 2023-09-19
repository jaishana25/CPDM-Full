import React from 'react';
import aboutbg from './images/aboutbg.png';
import './About.css';
import fac from './images/fac.jpeg';


function About() {
  return (
    <div className='body'>
      
       <div className='lines-container'>
        <div className='line'></div>
        {/* Adjust the width as per your desired space */}
        <div className='line'></div>
      </div>
      <p className='phd-text2'>About Us</p>
      <div className='lines-container'>
        <div className='line2'></div>
        </div>
        <div className='image-container'>
        <img src={aboutbg} alt="about" className='responsive-image' >
         
          </img>
          <div className="text-overlay">
            <div className='wrapper'>
              <div className='static-txt'>
                Welcome to
              </div>
              <ul className='dynamic-txt'>
              <li><span>SCALE Lab  </span></li>
                <li><span>CPDM </span></li>
                
                <li><span>IISc</span></li>
              </ul>
            </div>
          </div>


        </div>
        <div className="grids">
        <div className="col2" >   <div className='cardcont2'>
         
         <p>Vision </p>
         </div>
         <p className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat, mi non feugiat tristique, elit dolor finibus
    metus, eu rhoncus arcu nisi eu est. Mauris sit amet lorem vitae purus lobortis vestibulum. Pellentesque habitant morbi
    tristique senectus et netus et malesuada fames ac turpis egestas. m. Mauris fringilla sem eu erat laoreet
    venenatis.</p></div>
         <div className="col2" >   
         <div className='cardcont2'>
         
         <p>Mission </p>
         </div>
         <p className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat, mi non feugiat tristique, elit dolor finibus
    metus, eu rhoncus arcu nisi eu est. Mauris sit amet lorem vitae purus lobortis vestibulum. Pellentesque habitant morbi
    tristique senectus et netus et malesuada fames ac turpis egestas. m. Mauris fringilla sem eu erat laoreet
    venenatis.</p>
         </div>

        
      </div>

      <p className='phd-text2'>Research Faciltities</p>

      <div className='gridss'>
        <div className='col4'>             <div className='image-holder'>
              <img src={fac} alt='Card Image'  />
            </div>
            <p>metuseu rhoncusarcu</p>
            </div>
        <div className='col4'>
        <div className='image-holder'>
              <img src={fac} alt='Card Image'  />
            </div>
            <p>metuseu rhoncusarcu</p>
            </div>
            <div className='col4'>
            <div className='image-holder'>
              <img src={fac} alt='Card Image'  />
            </div>
            <p>metuseu rhoncusarcu</p>

            </div>
            <div className='col4'>
            <div className='image-holder'>
              <img src={fac} alt='Card Image'  />
            </div>
            <p>metuseu rhoncusarcu</p>
            </div>
         
        </div>

      <div className='gridss'>
        <div className='col4'>             <div className='image-holder'>
              <img src={fac} alt='Card Image'  />
            </div>
            <p>metuseu rhoncusarcu</p>
            </div>
        <div className='col4'>
        <div className='image-holder'>
              <img src={fac} alt='Card Image'  />
            </div>
            <p>metuseu rhoncusarcu</p>
            </div>
            <div className='col4'>
            <div className='image-holder'>
              <img src={fac} alt='Card Image'  />
            </div>
            <p>metuseu rhoncusarcu</p>

            </div>
            <div className='col4'>
            <div className='image-holder'>
              <img src={fac} alt='Card Image'  />
            </div>
            <p>metuseu rhoncusarcu</p>
            </div>
         
        </div>

   
        
     
            
          
          
        </div>
       

    
      


    
  )
}

export default About