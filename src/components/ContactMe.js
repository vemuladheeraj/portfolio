import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './componentscss/contactme.css';

class ContactMe extends Component{
    constructor(){
        super();
        this.sendMail=this.sendMail.bind(this);
    }
         sendMail(){
           // debugger;
            // var name=document.getElementById("name");
            // var email=document.getElementById("email");
            // var sub=document.getElementById("sub");
            // var msg=document.getElementById("msg");
        }
    
    render(){
        return( 
            <div id="contact">
            <h3 class="textAboutme">Drop me a message</h3>
            <br/>
            <br/>
            <br/>
                <br/>
            <div class="container contact-form">
          
            <form action="mailto:vemula.dheeraj@gmail.com" method="post" encType="multipart/form-data" name="EmailForm">
           
               <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input id="name" type="text" name="txtName" class="form-control" placeholder="Your Name "/>
                        </div>
                        <div class="form-group">
                            <input id="email" type="text" name="txtEmail" class="form-control" placeholder="Your Email " />
                        </div>
                        <div class="form-group">
                            <input id="sub" type="text" name="txtPhone" class="form-control" placeholder="Subject" />
                        </div>
                        
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <textarea id="msg" name="txtMsg" class="form-control" placeholder="Your Message " style={{width: '100%', height: '150px'}}></textarea>
                        </div>
                    </div>
                 
                </div>
                <br/>
                <br/>
                <br/>
                <div class="form-group">
                            <button  type="submit" name="btnSubmit" class="btnContact" >Submit</button>
                            <h6>If you are unable to submit, you can always reach me at <q>vemula.dheeraj@gmail.com</q></h6>
                        </div>
            </form>
</div>

</div>
          );
    }
}
export default ContactMe;