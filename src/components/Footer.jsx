import '../scss/Footer.scss'
import React from 'react'

export default function Footer (){
    return(
        <div className="footer">
            <hr/>
            <div className="main-footer">
                <div className="footer-contacts">
                    <h3>Any questions? Get in touch!</h3>
                    <button className="button1"><i class="fa fa-comments" aria-hidden="true"></i> Chat Now</button>
                    <button><i class="fa fa-phone fa-flip-horizontal" aria-hidden="true" ></i> 0345 222 2525</button>
                    <p>Please call Monday to Friday between 9.00am and 5.00pm.</p>
 
                </div>
                <div className="footer-links">
      
                </div>
            </div>
            <hr/>
            <div className="bottomFooter">
                <img src="" alt=""/>
                <div>
   
                    <p>2020 Rodent Page</p>
                </div>
            </div>
        </div>

    )
}