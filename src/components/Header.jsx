import '../scss/Header.scss'
import React from 'react'
import {Link} from 'react-router-dom'

export default function Header (){
    return(
        <div>
     
         <div className="header"> 
          <img src="https://green.cdn.energy/branding/logo-r.svg" alt="green logo"/>

          <ul className="navbar">
           

            <li>
              <Link to="/" style={{textDecoration: "none", color: "black"}}><span style={{textDecoration: "none"}}>Home</span></Link>
            </li>
            <li>
              <Link to="/about" style={{textDecoration: "none"}}><span style={{textDecoration: "none"}}>About</span></Link>
            </li>
            <li>
              <Link to="/contact" style={{textDecoration: "none"}}><span style={{textDecoration: "none"}}>Contact</span></Link>
            </li>
          </ul>
          </div>  
       
        </div>

    )
}