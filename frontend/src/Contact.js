import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Link,to} from 'react-router-dom';
import Navabr from './Navabr';
const Contact=()=>{
    return(
      <>
      <Navabr />
    <div className='contactus'>
    <h1 style={{fontSize:"40px",textAlign:"center",color:'green',textShadow:'2px 2px #FF0000'}}>CONTACT ME</h1>
    <div className='contactdiv'>
      <form>
      <input style={{marginTop:'30px',width:'100vh'}} class="form-control form-control-lg" type="text" placeholder="Your Name" aria-label=".form-control-lg example" />
      <input style={{marginTop:'30px'}} class="form-control form-control-lg" type="email" placeholder="Your Email" aria-label=".form-control-lg example" />
      <input style={{marginTop:'30px'}}class="form-control form-control-lg" type="text" placeholder="Subject" aria-label=".form-control-lg example" />
      <div class="mb-3" style={{marginTop:'40px'}}>
           <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>
      <button className='button-78' style={{marginTop:'40px',textAlign:'center',transition:"background-color 0.3s ease"}} type='submit'>Send Now</button>

      </div>
      </form>
    </div>
    </div>
  
  
  
      </>
    )
  }
  

  export default Contact;