import React from 'react'
import "./App.css"
import Navabr from './Navabr'
import Certificates from "./Certificates.js";
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import AboutMe from './AboutMe.js'
import Services from './Services.js'
import Welcome from './Welcome.js';
import Contact from './Contact.js'
import Resume from './Resume.js';
import Viewresume from './viewresume.js';
import ContactPage from './ContactPage.js';
import ProfilePage from './ProfilePage.js';
const App=()=>{
  return(
    <>
   <ProfilePage />
   {/* <BrowserRouter>
      
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/certificates" element={<Certificates />} />
          <Route exact path="/services" element={<Services/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path='/about' element={<AboutMe />} /> 
          <Route exact path='/resume' element={<Resume/>} />
          <Route exact path='/resume/viewresume' element={<Viewresume/>} />  
        </Routes>
    </BrowserRouter>     */}
    </>
  )
}


export default App;