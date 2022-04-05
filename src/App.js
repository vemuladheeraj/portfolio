import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import './index.js';
import './timeline.css';
import 'bootstrap/dist/css/bootstrap.css';
import azure from './logos/azuredevops.svg';
import fb from './logos/facebook.svg';
import mail from './logos/gmail.svg';
import insta from './logos/instagram.svg';
import linkedin from './logos/linkedin.svg';
import github from './logos/github.svg';
import myimage from './logos/rbackimage.png';
import download from './logos/cloud-download.svg';
import Experience from './components/Experience.js';
import Technologies from './components/Technologies.js';
import Header from './components/Header.js';
import Contactme from './components/ContactMe.js';
import Footer from './components/Footer.js';
import resume from './DheerajResume.pdf';
class  App extends Component {
  
  render(){
  return (
    <div className="App">    

<Header/>
<div class="row">
  <div class="col-sm-9">
  <div class="row">
  <div class="col-sm-9">
  <div> 

   <span  class="brlarge"></span>
    </div>
    <h3 style={{color:'grey'}}>HEY THERE!</h3>
    <h1> I am Dheeraj Vemula</h1>
    <h4>Automation engineer</h4> 
    <div> 
   <a href="https://www.linkedin.com/in/dheerajvemula/"> <img src={linkedin} width="65" height="65" style={{border: 'solid 15px', color:'white'}}/></a>
   <a href="https://dev.azure.com/vemuladheeraj/"><img src={azure} width="65" height="65" style={{border: 'solid 15px', color:'white'}}/></a>
   <a href="https://www.instagram.com/vemuladheeraj/"><img src={insta} width="65" height="65" style={{border: 'solid 15px', color:'white'}} /></a>
   <a href="#"><img src={mail} width="65" height="65" style={{border: 'solid 15px', color:'white'}}/></a>
   <a href="https://www.facebook.com/vemula.dheeraj.7/"> <img src={fb} width="65" height="65" style={{border: 'solid 15px', color:'white'}}/></a>
    </div>
    <div class="col-sm-12">
  <a href="https://github.com/vemuladheeraj"><img src={github} width="65" height="65" style={{border: 'solid 15px', color:'white'}}/></a>
  </div>
  <br>
  </br>
  <div class="container">
  <div><a href={resume}><img src={download} width="65" height="65" /><br/>Resume</a></div>
</div>
  </div>
  </div>  
  </div>
  <div class="col-sm-2">
    <div class="col-sm-1">
    <img src={myimage} class="float-right"/>
    </div>
  </div>
</div>

  <section>
<h3 class="textAboutme" id="aboutme">About Me</h3>
<br/>
<h4>WHO AM I ?</h4>
<h5> 
I am software engineer having about 7.6 years of experience in QA with more than 6.5 years of experience on Selenium Web Driver using C#.
<br/>
I love exploring new technologies 

</h5>
  </section>
  <span  class="brlarge"></span>
<Technologies id="Somewhere"/>
<span  class="brlarge"></span>
 <Experience/>
 <span  class="brlarge"></span>
<Contactme/>


<Footer/>
</div>
  );
}
}

export default App;
