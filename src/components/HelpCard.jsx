import React from 'react'

export default function HelpCard (props){
    return(
        <div className="help-card">
            <div className="icon"><img src ={props.image}/></div>
            <div>  
                <h2>{props.heading}</h2>
                <h3>{props.date}</h3>
                <div className="author-section">
                    <img src ={props.image}/>
                    <div>
                        <p>{props.date}</p>
                        <p> Written by <span>{props.author}</span></p>
                    </div>
                </div>
            </div>
        </div>

    )
}