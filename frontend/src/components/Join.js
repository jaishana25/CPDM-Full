import React from 'react';
import './Join.css';

function Join() {
  return (
    <div className='body'>
       <div className='lines-container'>
        <div className='line'></div>
        {/* Adjust the width as per your desired space */}
        <div className='line'></div>
        </div>

        <p className='phd-text2'>Join Us</p>
        <div className='lines-container'>
        <div className='line'></div>
      </div>
      <div className='details'>

      </div>
      <div className='form'>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScDfPBUDA1qH_GZK_UYZSOsiH0hy8xVmUpBNp-gdWXmGPLg4w/viewform?embedded=true" width="1000" height="1000" frameborder="0"  className="google-form-container" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
    </div>
  )
}

export default Join