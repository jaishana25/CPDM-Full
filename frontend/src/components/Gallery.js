
import './Gallery.css'
import event from './images/event.png';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// function Gallery() {
//   return (
//     <div className='body'>
//       <div className='lines-container'>
//      <div className='line'></div>
//      {/* Adjust the width as per your desired space */}
//      <div className='line'></div>
//      </div>

//      <p className='phd-text2'>Gallery</p>
//      <div className='lines-container'>
//      <div className='line'></div>
//    </div>
//    <p className='phd-text3'> Lab </p>
  
//     </div>
//   )
// }

// export default Gallery


import React, { Component } from "react";
import Slider from "react-slick";

import purak from './images/purak.jpeg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
    
    
    return (
      
            <div className='body'>
      <div className='lines-container'>
     <div className='line'></div>
     {/* Adjust the width as per your desired space */}
     <div className='line'></div>
     </div>

     <p className='phd-text2'>Gallery</p>
     <div className='lines-container'>
     <div className='line'></div>
   </div>
   
        <section id="section-articles">
        <p className='phd-text3'> LATEST NEWS <span className="see-more"><a href="/articles"><u>See more </u></a> </span> </p>
        <div className='lines-container'>
     <div className='line'></div>
   </div>
        <div className='grid2'>
        <div className='col2'>
        <img src={purak} alt="pur" className='productimg' />
          

        </div>
        <div className='col2'>
        <img src={purak} alt="pur" className='productimg' />
          
        
        </div>
      
       
       
      </div>
      <br/>
      </section>
      <section id="section-lab">
   <p className='phd-text3'> LAB </p>
   <div className='lines-container'>
     <div className='line'></div>
   </div>
  
       <div className='containerr'>
       <Carousel
      autoPlay
      infiniteLoop
      showStatus={true}
      showIndicators={true}
      showThumbs={false}
      showArrows={true} 
    >
      <div>
        <img src={event} alt="Image 1" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={event} alt="Image 2" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={event} alt="Image 3" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>

        
        </div>
        <br/>
        </section>
      <section id="section-events">

      <p className='phd-text3'> EVENTS <span className="see-more">< a href=""><u>See more </u> </a> </span>  </p>
      <div className='lines-container'>
     <div className='line'></div>
   </div>
      <div className='gridg'>
        <div className='coll'>
        <img src={event} alt='event' className='imagehold'/>
        </div>
        <div className='coll'>
          <img src={event} alt='event' className='imagehold'/>
          
          </div>
          <div className='coll'>
          <img src={event} alt='event' className='imagehold'/>
          </div>
          <div className='coll'>
          <img src={event} alt='event' className='imagehold'/>
          </div>
          <div className='coll'>
          <img src={event} alt='event' className='imagehold'/>
          </div>
          <div className='coll'>
          <img src={event} alt='event' className='imagehold'/>
          </div>
         
      </div>
      </section>


      </div>
    );
  }

export default Gallery;