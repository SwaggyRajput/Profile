import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Link,to} from 'react-router-dom';
import javascript from './certificate/javascript_basic certificate.jpg'
import problem from './certificate/problem_solving_intermediate certificate.jpg'
import python from './certificate/python_basic certificate.jpg'
import sql from './certificate/sql_intermediate certificate.jpg'
import Navabr from './Navabr';
const Certificates=()=>{
    return(
      <>
    <Navabr />
     <h1 className='certi'>Certificates</h1>
   <div className="chefdiv">
 <div className="chefdiv1">
  <div>
  <img src={javascript} alt='javascript' className='javascriptimg' />
  <h2 style={{textAlign:"center"}}>Harsh Singh</h2>
  <h3 style={{textAlign:"center"}}>Head Chef</h3>
  </div>
  <div>
  <img src={problem} className='problemimg'/>
  <h2 style={{textAlign:"center"}}>Harsh Singh</h2>
  <h3 style={{textAlign:"center"}}>Head Chef</h3>
  </div>
  <div>
  <img src={python} className='pythonimg'/>
  <h2 style={{textAlign:"center"}}>Harsh Singh</h2>
  <h3 style={{textAlign:"center"}}>Head Chef</h3>
  </div>
  </div>
  <div className="chefdiv2">
  <div>
  <img src={sql}className='sqlimg' />
  <h2 style={{textAlign:"center"}}>Harsh Singh</h2>
  <h3 style={{textAlign:"center"}}>Head Chef</h3>
  </div>
 
 
  </div>
 
   </div>

       
  
  
  
      </>
    )
  }
  

  export default Certificates;