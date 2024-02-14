import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Link,to} from 'react-router-dom';
import Navabr from './Navabr';
const Welcome=()=>{
    return(
      <>
    <div className='welcomediv'>
    <Navabr />
        <h1 className='welcomepage'>WELCOME</h1>
        
      </div>
    
      </>
    )
  }
  

  export default Welcome;