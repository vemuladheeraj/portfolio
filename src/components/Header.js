import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Header extends Component{
   constructor(){
       super();
       this.test=this.test.bind(this);
   }
   test()
       {
           debugger;
        //    var a =document.getElementById('Somewhere');
        //    a.scrollIntoView();
       }
    render(){
        return(
<nav class="navbar navbar-expand-sm sticky-top navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="#">Home</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar1">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar1">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#aboutme">About Me</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#exp">Experience</a>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
        );
    }}
    export default Header;

    // function test()
    // {
    //     document.getElementById('Somewhere').scrollIntoView();
    // }