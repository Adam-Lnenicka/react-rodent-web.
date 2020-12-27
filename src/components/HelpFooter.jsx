import '../scss/HelpFooter.scss'
import React from 'react'
import Logo from '../logo-grey.png'

export default function HelpFooter (){
    return(
        <div className="footer">

            <div className="help-footer">
                <img src={Logo} alt="green supplier logo"/>
                <a href="#">Email us</a>
                <div>
                    <div className="social-icons">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-linkedin"></i>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}