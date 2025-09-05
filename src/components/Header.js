import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Header extends Component{
   render(){
        const onToggleTheme = this.props.onToggleTheme;
        return(
           <div className="navbar-modern">
            <div className="container-narrow d-flex align-items-center justify-content-between" style={{padding: '12px 0'}}>
              <div className="d-flex align-items-center" style={{gap:'10px'}}>
                <a className="nav-link" href="#" style={{fontWeight:800, color:'var(--text)'}}>DV</a>
                <a className="nav-link" href="#aboutme">About</a>
                <a className="nav-link" href="#tech">Skills</a>
                <a className="nav-link" href="#exp">Experience</a>
                <a className="nav-link" href="#contact">Contact</a>
              </div>
              <button className="btn-theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">Toggle theme</button>
            </div>
          </div>
        );
    }}
    export default Header;