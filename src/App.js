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
import Experience from './components/Experience.js';
import Technologies from './components/Technologies.js';
import Header from './components/Header.js';
import Contactme from './components/ContactMe.js';
class  App extends Component {
  
  render(){
  return (
    <div className="App">    

<Header/>
<div class="row">
  <div class="col-sm-9">
  <div class="row">
  <div class="col-sm-6">
  <div> 
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>
    <h3 style={{color:'grey'}}>HEY THERE!</h3>
    <h1> I am Dheeraj Vemula</h1>
    <h4>Automation engineer</h4> 
    <div>
   <a href="https://www.instagram.com/vemuladheeraj/"><img src={insta} width="65" height="65" style={{border: 'solid 15px', color:'white'}} /></a>
   <a href="#"><img src={mail} width="65" height="65" style={{border: 'solid 15px', color:'white'}}/></a>
   <a href="https://www.facebook.com/vemula.dheeraj.7/"> <img src={fb} width="65" height="65" style={{border: 'solid 15px', color:'white'}}/></a>
   <a href="https://www.linkedin.com/in/dheerajvemula/"> <img src={linkedin} width="65" height="65" style={{border: 'solid 15px', color:'white'}}/></a>
   <a href="https://dev.azure.com/vemuladheeraj/"><img src={azure} width="65" height="65" style={{border: 'solid 15px', color:'white'}}/></a>
    </div>
    <div class="col-sm-12">
  <a href="https://github.com/vemuladheeraj"><img src={github} width="65" height="65" style={{border: 'solid 15px', color:'white'}}/></a>
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
<h3 class="textAboutme">About Me</h3>
<br/>
<h4 class="textcursive">WHO AM I ?</h4>
<h4 class="textl"> 
I am software enginner having about 6.5 years of experience in QA with more than 5 years of experience on Selenium Web Driver using C# and Java.
<br/>
I love exploring new technologies 

</h4>
  </section>
<br/>
<br/>

<Technologies id="Somewhere"/>
<br/>
<br/>
<br/>
 <Experience/>
<br/>
<br/>
<br/>
<br/>

<Contactme/>



<footer>
  <br/>
<div class="spinner-grow text-muted"></div>
<div class="spinner-grow text-primary"></div>
<div class="spinner-grow text-success"></div>
<div class="spinner-grow text-info"></div>
<div class="spinner-grow text-warning"></div>
<div class="spinner-grow text-danger"></div>
<div class="spinner-grow text-secondary"></div>
<div class="spinner-grow text-dark"></div>
<div class="spinner-grow text-light"></div>
</footer>
<nav class="navbar navbar-expand-sm navbar-light bg-light">
  No rights reserved
</nav>
    </div>
  );
}
}

export default App;
