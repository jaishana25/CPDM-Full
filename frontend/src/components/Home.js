import React from 'react'
import './Home.css';
import human from './images/human.png';
import Rectangle24 from './images/Rectangle24.png';
import login from './images/login.png';
import about from './images/about.png';
import contactt from './images/contactt.png';
import group from './images/group.png';
import rect from './images/rect.png';
import rectb from './images/rectb.png';

function Home() {
  return (
    
    <div>
       <img src={human} alt="Image" className="left-image" />
       <div className='box'></div>
       <div className="second-box"><p>Join Us</p></div>
      
       <div className='box2'>
       <div className='background-image'></div>
{/* <img src={rect} alt="rectt" className='rectu'/> */}
       
   <div className='gridsss'>
<div className='coll2' >
  <b>Welcome</b>
  <p>
  Applied Geometry and Mechanisms Laboratory (AGML) and Computerized Anthropometry and Ergonomics
 Simulation Lab (SCALE) are research units, headed by Prof. Dibakar Sen, at Department of mechanical  Engineering and Centre for Product Design and Manufacturing (CPDM) respectively. Our aim is understanding  shape, motion and their interactions using the knowledge of geometry, topology, kinematics and allied subjects.

  </p>

</div>

<div className='coll2'>
  
<img src={rect} alt="rectt" className='rectu'/>

  <b>Paradigm</b>
  <p>
  Geometry rules mechanical behaviour <br/>

Geometry is the medium of experience and expression of physical phenomena
  </p>
  
</div>
<img src={rect} alt="rectt" className='recti'/>
<img src={rectb} alt="rectb" className='rectb' style={{ position: 'absolute', zIndex: '1' }}/>

<div className='coll2'>
  <b>Objective</b>
  <p>
  Develop novel methods for shape representation and motion realization.

Develop intutive methods for assembly and kinematic models of mechanical assemblies.

Recognise non-intutive scenarios of mechanical behaviour
  </p>
  
  
</div>
   </div>
  
   
 </div>
 <div className='box3'>
 <div className='rec-bg'>

  <img src={Rectangle24} alt="rec" className='rec'/>
</div>
<div className='grid-box'>
<div className='cardi'>  <a href="/about">  <img src={about} alt="ab"/> <br/> <b>About Us</b> </a> </div>
    <div className='cardi'> <a href="/contact"> <img src={contactt} alt="con"/>  <br/> <b>Contact Us</b></a></div>
    <div className='cardi'><img src={login} alt="lo"/>  <br/> <b>Login</b>  <br/> <p>(Only for internal purposes)</p></div>
  </div>

</div>
 
    
   

  </div>
  )
}

export default Home