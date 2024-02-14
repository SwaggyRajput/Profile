/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navabr from './Navabr';
import collegeresume from './portfolio/resumeatswala-1.pdf'
const viewresume=()=>{
    return(
      <>
       <Navabr />
      

<div height='100vh' width='100vh'>
<object data={collegeresume} width='100%' height='643px' ></object>
</div>

      </>
    )
  }
  

  export default viewresume;