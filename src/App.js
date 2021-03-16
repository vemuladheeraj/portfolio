import logo from './logo.svg';
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


function App() {
  return (
    <div className="App">    


<nav class="navbar navbar-expand-sm bg-primary navbar-dark">
  <a class="navbar-brand" href="#">Home</a>
  {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button> */}
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Blog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">contact</a>
      </li>    
    </ul>
  </div>  
</nav>
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
    <text>Automation engineer</text> 
    <div>
   <a href="#"><img src={insta} width="65" height="65" style={{border: 'solid 15px', color:'white'}} /></a>
   <a href="#"><img src={mail} width="65" height="65" style={{border: 'solid 15px', color:'white'}}/></a>
   <a href="#"> <img src={fb} width="65" height="65" style={{border: 'solid 15px', color:'white'}}/></a>
   <a href="#"> <img src={linkedin} width="65" height="65" style={{border: 'solid 15px', color:'white'}}/></a>
   <a href="#"><img src={azure} width="65" height="65" style={{border: 'solid 15px', color:'white'}}/></a>
    </div>
    <div class="col-sm-12">
  <a href="#"><img src={github} width="65" height="65" style={{border: 'solid 15px', color:'white'}}/></a>
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
{/* <div class="card text-center">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has a regular title and short paragraphy of text below it.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div> */}
  <section>
<h5>About Me</h5>
<br/>
<h4>WHO AM I ?</h4>
<text>
I am software enginner having about 6.5 years of experience in QA with more than 5 years of experience on Selenium Web Driver using C# and Java.
<br/>
I love exploring new technologies 

</text>
  </section>
<br/>
<br/>
<br/>
  <div class="container">
            <h4>My Experiece</h4>
            <div class="row">
                <div class="col-md-12">
                    <div class="main-timeline2">
                        <div class="timeline">
                            <span class="icon fa fa-globe"></span>
                            <a href="#" class="timeline-content">
                                <h3 class="title">2019</h3>
                                <br/>
                                <p class="description">
                                Working as Software Eng Sr Analyst in Wells Fargo from Sep 2019 to till date.
                                </p>
                            </a>
                        </div>
                        <div class="timeline">
                            <span class="icon fa fa-rocket"></span>
                            <a href="#" class="timeline-content">
                                <h3 class="title">2017</h3>
                                <br/>
                                <p class="description">
                                Worked as Application Development Analyst with Accenture from Feb 2017 to Aug 2019.
                                </p>
                            </a>
                        </div>
                        <div class="timeline">
                            <span class="icon fa fa-briefcase"></span>
                            <a href="#" class="timeline-content">
                                <h3 class="title">2014</h3>
                                <br/>
                                <p class="description">
                                Worked as Associate Software Engineer with <b>Accenture from August 2014 to Feb 2017 </b>on the payroll of Nexwave Talent Management Solution.
                                </p>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div> 
        {/* <div class="backgroundtimeline">
      <div class="timeline">
  <div class="container left">
    <div class="content">
      <h2>2019</h2>
      <p>Working as Software Eng Sr Analyst in Wells Fargo from Sep 2019 to till date.</p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
    <h2>2017</h2>
      <p>Worked as Application Development Analyst with Accenture from Feb 2017 to Aug 2019.</p>
 <p></p>
    </div>
  </div>
  <div class="container left">
    <div class="content">
      <h2>2014</h2>
      <p>Worked as Associate Software Engineer with <b>Accenture from August 2014 to Feb 2017 </b>on the payroll of Nexwave Talent Management Solution.</p>
    </div>
 </div>
</div>
</div> */}
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
    </div>
  );
}

export default App;
