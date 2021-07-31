import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './componentscss/experienceTimeline.css';



class Experience extends Component{
    render(){
return(
    
    <div id = "exp" class="container">
    <h3 class="textAboutme">My Experience</h3>  
    <div class="row">
    <div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="main-timeline">
                <div class="timeline">
                    <a href="#" class="timeline-content">
                        <span class="timeline-year">2021</span>
                        <div class="timeline-icon">
                            <i class="fa fa-globe"></i>
                        </div>
                        <h3 class="title">Advisory Service Analyst</h3>
                        <p class="description">
                              Working as Advisory Service Analyst with <b>Optum Global Solutions(part of UHG)</b> from July 2021 till date.
                        </p>
                    </a>
                </div>
                <div class="timeline">
                    <a href="#" class="timeline-content">
                        <span class="timeline-year">2019</span>
                        <div class="timeline-icon">
                            <i class="fa fa-rocket"></i>
                        </div>
                        <h3 class="title">Software Eng Sr Analyst</h3>
                        <p class="description">
                            Worked as Software Eng Sr Analyst in<b> Wells Fargo </b>from Sep 2019 to 2021.
                        </p>
                    </a>
                </div>

 <div class="timeline">
                    <a href="#" class="timeline-content">
                        <span class="timeline-year">2017</span>
                        <div class="timeline-icon">
                            <i class="fa fa-rocket"></i>
                        </div>
                        <h3 class="title">Application Development Analyst</h3>
                        <p class="description">
                             Worked as Application Development Analyst with<b> Accenture</b> from Feb 2017 to Aug 2019.
                        </p>
                    </a>
                </div>
 <div class="timeline">
                    <a href="#" class="timeline-content">
                        <span class="timeline-year">2014</span>
                        <div class="timeline-icon">
                            <i class="fa fa-rocket"></i>
                        </div>
                        <h3 class="title">Associate Software Engineer</h3>
                        <p class="description">
                            Worked as Associate Software Engineer with <b>Accenture from August 2014 to Feb 2017 </b>on the payroll of Nexwave Talent Management Solution.
                        </p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
</div> 

);
}
}
export default Experience;
