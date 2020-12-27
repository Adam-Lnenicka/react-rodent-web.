import './Card.scss'
import React from 'react'

export default function Card (props){
    return(
        <div className="card">
            <img src ={props.image}/>
            <div className="card-content">
                <button>{props.button}</button>
                <div className="date">{props.date}</div>
                <h2>{props.heading}</h2>
                <p> Written by <span>{props.author}</span></p>
            </div>
        </div>

    )
}