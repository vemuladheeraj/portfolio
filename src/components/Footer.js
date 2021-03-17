import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './componentscss/footercss.css';


class Footer extends Component{
    constructor(){
        super();
        this.test=this.test.bind(this);
    }
    test()
        {
           
           var modal =document.getElementById('myModal');
           var btn = document.getElementById("myBtn");
           var close = document.getElementById("close");
         //    a.scrollIntoView();
         var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// close.onclick=function() {
//     modal.style.display = "block";
//   }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
        }
     render(){
         return(
        <div>

<footer>
  <br/>
  <div id="myModal" class="modal">
  <div class="modal-dialog">
  <div class="modal-content">
  <div class="modal-header">
          <h4 class="modal-title">Credits</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
      
        <div class="modal-body">
         Below are few of the sites for reference which helped me in building this site. 
         <div>
             <a href="https://simpleicons.org/">1. Social network icons</a>
             <br/>
             <a href="https://github.com/gitname/react-gh-pages/">2. Deploying site to Github pages</a>
             <br/>
             <a href="https://bootsnipp.com/">3. Template idea of Contact Us</a>
             <br/>
             <a href="https://www.w3schools.com/bootstrap4/default.asp/">4. Bootstrap help</a>
             <br/>
             <a href="https://www.w3schools.com/react/">5. React JS help</a>
             <br/>
         </div>
        </div>
        
       
        {/* <div class="modal-footer">
          <button  class="btn btn-danger" id="close">Close</button>
        </div> */}
        
  </div>
  </div>
</div>
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

  <button type="button" class="btn btn-secondary btn-lg btn-block"  id="myBtn" onClick={this.test}> Credits</button>
</nav>
    </div>
         );
     }
    }
export default Footer;