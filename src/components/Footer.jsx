import '../scss/Footer.scss'
import React from 'react'

export default function Footer (){
    return(
        <div className="footer">
            <hr/>
            <div className="main-footer">
                <div className="footer-contacts">
                    <h3>Any questions? Get in touch!</h3>
                    
                    <p><i class="fa fa-phone fa-flip-horizontal" aria-hidden="true" ></i>   0345 222 2525</p>
                    <p><i class="far fa-envelope"></i>happy-rodent@gmail.com</p>
                    <p>Please call Monday to Friday between 9.00am and 5.00pm.</p>
 
                </div>
            </div>

            <div className="bottomFooter">
                <p>2020 Rodent Page</p>
            </div>
        </div>

    )
}