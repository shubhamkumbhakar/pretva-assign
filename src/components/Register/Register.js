import React from 'react'
import image1 from '../../Images/Image1.png'
import {Link} from 'react-router-dom'
import '../StyleAll.css'

const Register = () => {
    return (
        <div>
            <br/>
            <section className="container-fluid">
            <Link to="/login"><button type="button" className="btn btn-light btn-outline-dark">Login</button></Link>
            <Link to="/register"><button type="button" className="btn btn-warning" style={{margin: "10px"}}>Register</button></Link>

            
            <div id="div1" class="row">
            <div className="col-lg-6 col-md-6 col-12">
               <img id="graphic" src={image1} alt="graphic"/>
            </div>
            
            <div className="col-lg-6 col-md-6 col-12">
            <div id="registercard">
                <h2><b>New User Registration</b></h2><br/>
                <form>

                <div class="column">
                <div class="form-group input-icon">
                    <input type="text" class="form-control register-form" aria-describedby="emailHelp" placeholder="First Name*" style={{fontStyle:"italic", paddingLeft:"25px"}}/>
                </div>
                <div class="form-group input-icon">
                    <input type="text" class="form-control register-form" aria-describedby="emailHelp" placeholder="Last Name*" style={{fontStyle:"italic", paddingLeft:"25px"}}/>
                </div>
                <div class="input-icon">
                  <select class="form-control register-form" id="yearselect" style={{width: "15.9em", fontColor:"grey", height: "2.4em", marginBottom:" 15px", paddingLeft:"16px", fontStyle:"italic"}}>
                    <option value="" selected disabled hidden style={{ fontSize:"20px" }}>Are you a Buyer or Supplier?*</option>
                    <option value="Buyer">Buyer</option>
                   <option value="Supplier">Supplier</option>
                   </select>
                </div>
                <div class="form-group input-icon">
                    <input type="text" class="form-control register-form" placeholder="Company Name*" style={{fontStyle:"italic", paddingLeft:"25px"}}/>
                </div>

                </div>
                <div class="column">

                <div class="form-group input-icon">
                    <input type="text" class="form-control register-form" aria-describedby="emailHelp" placeholder="Country*" style={{fontStyle:"italic", paddingLeft:"25px"}}/>
                </div>
                <div class="form-group input-icon">
                    <input type="text" class="form-control register-form" aria-describedby="emailHelp" placeholder="Contact Number*" style={{fontStyle:"italic", paddingLeft:"25px"}}/>
                </div>
                <div class="form-group input-icon">
                    <input type="email" class="form-control register-form" aria-describedby="emailHelp" placeholder="Email Address" style={{fontStyle:"italic", paddingLeft:"25px"}}/>
                </div>
                <div class="form-group input-icon">
                    <input type="password" class="form-control register-form" placeholder="Choose Password" style={{fontStyle:"italic", paddingLeft:"25px"}}/>
                </div>
                </div>
                <br/><br/>
                <button type="submit" class="btn btn-dark" style={{width: "15.9em", height: "2.4em"}}>Register</button>
                </form>
                <br/>
                
            </div>
            </div>
            </div>
            </section>
        </div>
    )
}

export default Register
