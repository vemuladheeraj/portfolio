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
  constructor(props){
    super(props);
    this.state = { theme: 'dark' };
  }

  handleToggleTheme = () => {
    const next = this.state.theme === 'dark' ? 'light' : 'dark';
    this.setState({ theme: next });
    const body = document.body;
    if (next === 'light') body.classList.add('light-theme');
    else body.classList.remove('light-theme');
  }

  render(){
  return (
    <div className="App">    
      <Header onToggleTheme={this.handleToggleTheme}/>

      <div className="container-narrow hero">
        <div className="hero-card text-left">
          <h3 className="hero-sub">HEY THERE!</h3>
          <h1>I am Dheeraj Vemula</h1>
          <h4 className="muted">Test Automation Engineer</h4>

          <div className="socials">
            <a href="https://www.linkedin.com/in/dheerajvemula/"><img src={linkedin} alt="LinkedIn"/></a>
            <a href="https://dev.azure.com/vemuladheeraj/"><img src={azure} alt="Azure DevOps"/></a>
            <a href="https://www.instagram.com/vemuladheeraj/"><img src={insta} alt="Instagram"/></a>
            <a href="mailto:vemula.dheeraj@gmail.com"><img src={mail} alt="Email"/></a>
            <a href="https://www.facebook.com/vemula.dheeraj.7/"><img src={fb} alt="Facebook"/></a>
            <a href="https://github.com/vemuladheeraj"><img src={github} alt="GitHub"/></a>
          </div>

          <a className="resume-tile" href={resume} target="_blank" rel="noreferrer">
            <img src={download} width="28" height="28" alt="Download"/>
            <span>View Resume</span>
          </a>
        </div>
        <div className="avatar-card">
          <img src={myimage} alt="Dheeraj"/>
        </div>
      </div>

      <section className="container-narrow section" id="aboutme">
        <h3>About Me</h3>
        <div className="card-modern text-left">
          <p className="muted">Results-driven and impact-oriented Test Automation Engineer with 11+ years of experience in building scalable automation frameworks using Selenium (C#). Skilled in delivering high-quality solutions across CI/CD pipelines and empowering cross-functional teams with intuitive automation tooling.</p>
          <p className="muted">Recognized for reducing manual effort, optimizing test execution, and driving innovation in Agile/Scrum environments.</p>
        </div>
      </section>

      <section className="container-narrow section" id="tech">
        <h3>Technologies and Tools</h3>
        <div className="card-modern">
          <div>
            <span className="chip">Selenium WebDriver (C#)</span>
            <span className="chip">Selenium Grid</span>
            <span className="chip">NUnit</span>
            <span className="chip">MSTest</span>
            <span className="chip">Postman</span>
            <span className="chip">SOAPUI</span>
            <span className="chip">Fiddler</span>
            <span className="chip">AutoIT</span>
            <span className="chip">UIPath</span>
            <span className="chip">API Testing</span>
            <span className="chip">SQL Server</span>
            <span className="chip">Azure DevOps</span>
            <span className="chip">Git/TFS</span>
            <span className="chip">Jira</span>
            <span className="chip">Rally</span>
            <span className="chip">C#</span>
            <span className="chip">Java</span>
          </div>
        </div>
      </section>

      <section className="container-narrow section" id="exp">
        <h3>Experience</h3>
        <Experience/>
      </section>

      <section className="container-narrow section" id="contact">
        <h3>Contact</h3>
        <Contactme/>
      </section>

      <Footer/>
    </div>
  );
}
}

export default App;
