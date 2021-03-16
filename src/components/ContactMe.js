import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './componentscss/contactme.css';

class ContactMe extends Component{
    constructor(){
        super();

        function sendMail(){
            debugger;
            var name=document.getElementById("name");
            var email=document.getElementById("email");
            var sub=document.getElementById("sub");
            var msg=document.getElementById("msg");
        }
    }
    render(){
        return( 
            <div>
            <h3 class="textAboutme">Drop me a message</h3>
            <br/>
            <br/>
            <div class="container contact-form">
          
            <form >
           
               <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input id="name" type="text" name="txtName" class="form-control" placeholder="Your Name *"/>
                        </div>
                        <div class="form-group">
                            <input id="email" type="text" name="txtEmail" class="form-control" placeholder="Your Email *" />
                        </div>
                        <div class="form-group">
                            <input id="sub" type="text" name="txtPhone" class="form-control" placeholder="Subject" />
                        </div>
                        
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <textarea id="msg" name="txtMsg" class="form-control" placeholder="Your Message *" style={{width: '100%', height: '150px'}}></textarea>
                        </div>
                    </div>
                 
                </div>
                <br/>
                <br/>
                <br/>
                <div class="form-group">
                            <button  onClick={this.sendMail} name="btnSubmit" class="btnContact" >Submit</button>
                        </div>
            </form>
</div>
</div>
          );
    }
}
export default ContactMe;