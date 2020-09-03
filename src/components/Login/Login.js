import React from 'react'
import image1 from '../../Images/Image1.png'
import {Link} from 'react-router-dom'
import '../StyleAll.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Login = () => {
    return (
        <div>
            <br/>
            <section className="container-fluid">
            <Link to="/login"><button type="button" className="btn btn-warning">Login</button></Link>
            <Link to="/register"><button type="button" className="btn btn-light btn-outline-dark" style={{margin: "10px", borderRadius: "4px"}}>Register</button></Link>

            
            <div id="div1" class="row">
            <div className="col-lg-6 col-md-6 col-12">
               <img id="graphic" src={image1} alt="graphic"/>
            </div>
            
            <div className="col-lg-6 col-md-6 col-12">
                <div id="logincard">
                <h2><b>Member Login</b></h2><br/>
                <form>
                <div class="form-group input-icon">
                    <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Registered Email ID" style={{fontStyle:"italic"}}/>
                </div>
                <div class="form-group input-icon">
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password" style={{fontStyle:"italic"}}/>
                </div><br/>
                <button type="submit" class="btn btn-dark" style={{width: "11em", height: "2em", paddingTop: "2px"}}>Login</button>
                <br/><br/>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1" style={{fontSize: "11px"}}>Remember me?</label>
                    <a href="./register"  style={{marginLeft:"45px", color: "grey", fontSize: "11px"}}>forgot password</a>
                </div>
                
                
                </form>
                </div>
            </div>
            </div>
            </section>
        </div>
    )
}

export default Login
