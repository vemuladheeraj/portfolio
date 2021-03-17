import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './componentscss/contactme.css';

class ContactMe extends Component{
    constructor(props){
        super(props);
        
        this.state={txtName:''};
        this.state={txtEmail:''};
        this.state={txtPhone:''};
        this.state={txtMsg:''};
        this.myChangeHandler=this.myChangeHandler.bind(this);
         this.mysubmitHandler=this.mysubmitHandler.bind(this);
    }
     myChangeHandler = (event) => {
     debugger;
     const target = event.target;
    const value =  target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
       }

    mysubmitHandler=(event)=>{
      debugger;
        event.preventDefault();
        var nodemailer = require('nodemailer');

        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'vemula.dheeraj@gmail.com',
            pass: ''
          }
        });
     debugger;
     let name=this.state.txtName;
     let email=this.state.txtEmail;
     let sub=this.state.txtPhone;
     let msg=this.state.txtMsg;
        var mailOptions = {
            from: email!=null?email:email,//window.alert('Enter email'),
            to: 'vemula.dheeraj@gmail.com',
            subject: 'From Portfolio'+"Name: "+name+sub,
            text: msg
          };
          window.alert('Hey this is Dheeraj! I know this email functionality is not working.. In order to trigger the email securely I need to add some backend code to store the email API key... Since I wanted to develop a static website for my portfolio, I have not implemented the email functionality..Please reach me at "vemula.dheeraj@gmail.com"');
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
          
            <form onSubmit={this.mysubmitHandler}>            
               <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input id="name" type="text" name="txtName" class="form-control" placeholder="Your Name  " value={this.state.txtName}  onChange={this.myChangeHandler}/>
                        </div>
                        <div class="form-group">
                            <input id="email" type="text" name="txtEmail" class="form-control" placeholder="Your Email " value={this.state.txtEmail} onChange={this.myChangeHandler} />
                        </div>
                        <div class="form-group">
                            <input id="sub" type="text" name="txtPhone" class="form-control" placeholder="Subject" value={this.state.txtPhone} onChange={this.myChangeHandler} />
                        </div>
                        
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <textarea id="msg" name="txtMsg" class="form-control" placeholder="Your Message " value={this.state.txtMsg}  style={{width: '100%', height: '150px'}}  onChange={this.myChangeHandler}></textarea>
                        </div>
                    </div>
                 
                </div>
                <br/>
                <br/>
                <br/>
                <div class="form-group">
                <input  type="submit" name="btnSubmit" class="btnContact"/>
                <br/>
                <br/>
                            <h6>If you are unable to submit, you can always reach me at <a href="mailto:vemula.dheeraj@gmail.com"><q>vemula.dheeraj@gmail.com</q></a></h6>
                        </div>
            </form>
</div>

</div>
          );
    }
}
export default ContactMe;