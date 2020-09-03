import React, { Component } from 'react'
import logo from '../../Images/logo.png'
import {Link} from 'react-router-dom'
import './Navbar.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import logo from '../../images/logo.svg'

class Navbar extends Component {
    
    render() {
        return (
            
            <nav class="navbar navbar-expand-lg navbar-light">
            
            <a class="navbar-brand" href="/register#"><img id="logo" src={logo} alt="Company logo" style={{marginLeft: "15px"}}/></a>
            <div className="item">
            <h5 className="mr-auto"><b>PretVA</b></h5>
            <p className="caption"><small>Making Fashion Easy</small></p>
            </div>

            
            <button style={{textAlign: "right"}} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse">
                <ul class="navbar-nav list" id="navbarSupportedContent">
                <li class="nav-item">
                    <a class="nav-link" href="/register">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/register" tabindex="-1" aria-disabled="true">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/register" tabindex="-1" aria-disabled="true">Search</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/register" tabindex="-1" aria-disabled="true">Feedback & Support</a>
                </li>
                </ul>

                <form class="form-inline my-2 my-lg-0 ml-auto"   style={{marginRight: "15px"}}>
                <Link to="/login"><button className="btn btn-outline-dark my-2 my-sm-0" type="submit"  style={{margin: "10px"}}>Login</button></Link>
                <Link to="/register"><button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Register</button></Link>
                </form>
            </div>
            </nav>
        )
    }
}

export default Navbar
