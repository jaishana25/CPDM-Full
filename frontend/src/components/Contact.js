import React from 'react';
import './Contact.css';
import Maps from './images/Maps.png';
import Email from './images/Email.png';
import phone from './images/phone.png';
import { useState } from 'react';



function Contact() {
 

  return (
    <div className='body'> 
    <div className='lines-container'>
        <div className='line'></div>
        {/* Adjust the width as per your desired space */}
        <div className='line'></div>
      </div>
      <p className='phd-text2'>Contact Us</p>
      <div className='lines-container'>
        <div className='line'></div>
        </div>
        <div className="parent">
        
          <div className='div1'> 
</div>

          <div className='div3'> <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1781.1142034640122!2d77.56763839442304!3d13.014617946078143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d38c0e294d%3A0x1adc73f47b7773c0!2sCentre%20for%20Product%20Design%20and%20Manufacturing%20(CPDM)!5e0!3m2!1sen!2sin!4v1688472624670!5m2!1sen!2sin"
  width="700"
  height="300"
  style={{ border: '0', marginRight: '0em' , marginTop:'1em', marginBottom:'1rem'}}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  class="google-map-iframe"

></iframe>
</div>
          <div className='div4'><img src={phone} alt="ph" className="icons"/> <span className="text-with-gap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus diam mauris, id eleifend eros rhoncus vitae. Nulla aliquet libero vel tortor aliquam ultrices. Vivamus finibus risus ut fermentum finibus. Curabitur eget massa</span></div>
 

</div>
    </div>
  )
}

export default Contact