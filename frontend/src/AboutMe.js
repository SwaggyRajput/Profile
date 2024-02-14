import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Link,to} from 'react-router-dom';
import Navabr from './Navabr';
import HarshPic from './portfolio/HarshPic.jpg'
const AboutMe=()=>{
    return(
      <>
       <Navabr />
     <div className='aboutbackground'>
     <h1 style={{textAlign:"center"}}>ABOUT ME</h1>
      <div className='harshpicdiv'>
      <img src={HarshPic} className="harshpic" alt='HarshPic' />
      </div>
      <h4 style={{textAlign:"center"}}>Welcome to my Profile.<br /> I'm Harsh Singh, a passionate and versatile full-stack developer and Android enthusiast. </h4><br />
      <h4 style={{textAlign:"center"}}>With a commitment to crafting seamless digital experiences, I bring together creativity and technical expertise to deliver innovative solutions.</h4>
 
     </div>
  
      </>
    )
  }
  

  export default AboutMe;