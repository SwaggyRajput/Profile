import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Link,to} from 'react-router-dom';

const Navabr=()=>{
    return(
      <>
  
  
  <nav className="navbar navbar-expand-lg navbar-light bg-light navbarback">
  <div className="container-fluid" >
    <Link className="navbar-brand" to="/"><span style={{color:"white"}}>HA</span><span style={{color:"aqua"}}>RSH</span></Link>
    <button className="navbar-toggler" style={{color:"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" style={{color:"white",fontWeight:"bold"}}>HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" style={{color:"white",fontWeight:"bold"}}>ABOUT ME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services" style={{color:"white",fontWeight:"bold"}}>SERVICES</Link> 
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/portfolio" style={{color:"white",fontWeight:"bold"}}>PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/certificates" style={{color:"white",fontWeight:"bold"}}>CERTIFICATES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact" style={{color:"white",fontWeight:"bold"}}>CONTACT ME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/resume" style={{color:"white",fontWeight:"bold"}}>RESUME</Link>
        </li>
        {/* <li className="nav-item dropdown"> */}
          {/* <Link className="nav-link dropdown-toggle"to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link> */}
          {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item"to="#">Action</Link></li>
            <li><Link className="dropdown-item"to="#">Another action</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item"to="#">Something else here</Link></li>
          </ul> */}
        {/* </li> */}

      </ul>
    
    </div>
  </div>
</nav>
  
  
  
  
  
  
  
  
  
  
      </>
    )
  }
  

  export default Navabr;