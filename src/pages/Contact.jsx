import '../scss/Contact.scss'
import React from 'react'
import Header from "../components/Header.jsx"
import Footer from '../components/Footer.jsx'


export default function Contact (){
    return(
        <div>
            <Header/>
   
            <div className="heading-text">
                <h1>Contact Us</h1>
                <p>Contact us to get more info!</p>
            </div>
            <div className="flexbox">
                <div  className="flexbox1" >
                    <h4>Address</h4>
                    <p>Oxford Street <br/>
                    London
                    <br/>
                    <br/>
                    Open Monday to Friday between 9.00am and 5.00pm.
                    </p>

     
                    <h4>Email</h4>
                    <p>happy-squirrel@gmail.com</p>

                    <h4>Telephone</h4>
                    <p>0377 267 2634</p>
                </div>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.8888971144834!2d-0.14422818422974515!3d51.51525427963651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad554c335c1%3A0xda2164b934c67c1a!2sOxford%20St%2C%20London%2C%20UK!5e0!3m2!1sen!2scz!4v1609271650005!5m2!1sen!2scz" width="100%" height="100%" frameBorder="0" style={{border:"0"}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
            </div>
            <Footer/>
        </div>

    )
}