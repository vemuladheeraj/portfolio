import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';



class Experience extends Component{
    render(){
return(
    
    <div class="container">
    <h3 class="textAboutme">My Experiece</h3>
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

);
}
}
export default Experience;
