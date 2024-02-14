import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Link,to} from 'react-router-dom';
import Navabr from './Navabr';
import resumepic from './portfolio/collegwalaresume-1.jpg'
import collegeresume from './portfolio/resumeatswala-1.pdf'
const Resume=()=>{
    return(
      <>
       <Navabr />
       <div className='resumediv1'>
     <h1 style={{textAlign:"center",color:'white'}}>RESUME</h1>
     <div className='resumediv'>
     <img className='resumeimg' src={resumepic} alt='resume'/>
     
     </div> 

    <div style={{display:'flex',justifyContent:'center',marginTop:'15px'}}>
    <span style={{textAlign:'center'}} ><a href={collegeresume}className='resumedownload button-78' download="Resume" style={{textDecoration:"none",textAlign:'center'}}>Download </a></span>
     <span className="button-78" style={{textAlign:'center'}} ><Link to="/resume/viewresume"  style={{textDecoration:"none",textAlign:'center',color:'white'}}>View </Link></span>
    </div>
   </div>



      </>
    )
  }
  

  export default Resume;
  