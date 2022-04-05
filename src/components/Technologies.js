import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Technologies extends Component{
    render(){
        return(                       

<div id="tech" class="container">
<h3 class="textAboutme">Technologies and Tools</h3>
<br/>
<p>
  <h5>
  {/* Have you ever heard <q> Jack of All trades but master of none ? </q> Yeah! that's me... ;) */}
  </h5>
</p>
<br/>
<div class="progress" style={{height:'20px'}}>
<div class="progress-bar progress-bar-striped progress-bar-animated" style={{width:'99%'}}><h6> Selenium webdriver</h6></div>
</div>
<br/>
<div class="progress" style={{height:'20px'}}>
<div class="progress-bar progress-bar-striped progress-bar-animated" style={{width:'85%'}}><h6> C#</h6></div>
</div>
<br/>
<div class="progress" style={{height:'20px'}}>
<div class="progress-bar progress-bar-striped progress-bar-animated" style={{width:'85%'}}><h6> API Testing (POSTMAN, Swagger, SOAP UI)</h6></div>
</div>
<br/>
<div class="progress" style={{height:'20px'}}>
<div class="progress-bar progress-bar-striped progress-bar-animated" style={{width:'70%'}}><h6>SQL Server</h6></div>
</div>
<br/>
<div class="progress" style={{height:'20px'}}>
<div class="progress-bar progress-bar-striped progress-bar-animated" style={{width:'70%'}}><h6> TFS, Azure Dev-ops, Jenkins</h6></div>
</div>
<br/>
<div class="progress" style={{height:'20px'}}>
<div class="progress-bar progress-bar-striped progress-bar-animated" style={{width:'63%'}}><h6> Java</h6></div>
</div>
<br/>
<div class="progress" style={{height:'20px'}}>
<div class="progress-bar progress-bar-striped progress-bar-animated" style={{width:'40%'}}><h6> Java Script</h6></div>
</div>
<br/>
<div class="progress" style={{height:'20px'}}>
<div class="progress-bar progress-bar-striped progress-bar-animated" style={{width:'45%'}}><h6> Python</h6></div>
</div>
<br/>
<div class="progress" style={{height:'20px'}}>
<div class="progress-bar progress-bar-striped progress-bar-animated" style={{width:'45%'}}><h6> React JS</h6></div>
</div>
<br/>
<div class="progress" style={{height:'20px'}}>
<div class="progress-bar progress-bar-striped progress-bar-animated" style={{width:'65%'}}><h6> UIPath(RPA)</h6></div>
</div>
<br/>
Few more which i cannot rate :D
<br/>
<br/>
<span>
<span style={{paddingLeft:'30px'}}>
<span class="badge badge-success" >Auto IT</span>
</span>
<span style={{paddingLeft:'30px'}}>
<span class="badge badge-success" >QC</span>
</span>
<span style={{paddingLeft:'30px'}}>
<span class="badge badge-success" >QTP</span>
</span>
<span style={{paddingLeft:'30px'}}>
<span class="badge badge-success" >Load Runner</span>
</span>
{/* <span style={{paddingLeft:'30px'}}>
<span class="badge badge-success" >GCP</span>
</span> */}
</span>
</div>
        );
    }
}
export default Technologies;
