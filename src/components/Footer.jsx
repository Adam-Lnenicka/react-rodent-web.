import '../scss/Footer.scss'
import React from 'react'

export default function Footer (){
    return(
        <div className="footer">
            <hr/>
            <div className="main-footer">
                <div className="footer-contacts">
                    <h3>Any questions? Get in touch!</h3>
                    
                    <p><i className="fa fa-phone fa-flip-horizontal" aria-hidden="true" ></i> 0377 267 2634</p>
                    <p><i className="far fa-envelope"></i>happy-squirrel@gmail.com</p>
                    <p>Please call Monday to Friday between 9.00am and 5.00pm.</p>
 
                </div>
            </div>

            <div className="bottomFooter">
                <p>2020 Happy Squirrel</p>
            </div>
        </div>

    )
}