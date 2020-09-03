import React from 'react'
import './Footer.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import fb from '../../Images/Facebook.svg'
const Footer = () => {
    return (
        <div>
           <div class="bg-dark table-container">
               <table>
                   <tr>
                       <td><b>Get in touch!</b></td>
                       <td>Location</td>
                       <td>Contact</td>
                       <td>Follow</td>
                   </tr>
                   <tr>
                       <td></td>
                       <td>Bengluru, Karnataka, India</td>
                       <td>support@pretva.com</td>
                       <td><a href="/register" style={{color: "white"}}>Facebook | Instagram | LinkedIn</a></td>
                   </tr>
                  
               </table>
           </div>
           <div class="footer-copyright text-left" style={{marginLeft:"20%"}}><small>© 2020 by PretVA</small></div>  
        </div>
    )
}


export default Footer