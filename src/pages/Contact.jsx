import '../scss/Contact.scss'
import React from 'react'
import Header from "../components/Header.jsx"
import Footer from '../components/Footer.jsx'


export default function Contact (){
    return(
        <div>
            <Header/>
   
            <div className="heading-text">
                <h1>Contact information.</h1>
                <p>Send us an email or call us.</p>
            </div>
            <div className="flexbox">
                <div  className="flexbox1" >
                    <h4 className="opening-times">Opening Times</h4>
                    <p>Contact us .</p>

                    <h4>Address</h4>
     
                    <h4>Email</h4>
                    <p>support@gcall us</p>

                    <h4>Telephone</h4>
                    <p>042387432874</p>
                </div>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2290.0414217848192!2d-1.6256183840198861!3d54.972372759376185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e771ae8d2b9e3%3A0x54b89016fafd9d53!2sGreen!5e0!3m2!1sen!2scz!4v1608485767455!5m2!1sen!2scz" width="100%" height="100%" frameBorder="0" style={{border:"0"}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
            </div>
            <Footer/>
        </div>

    )
}