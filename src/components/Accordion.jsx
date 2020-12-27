import React, { useState, useRef } from "react";


function Card(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");


  const button = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${button.current.scrollHeight}px`
    );

  }

  return (
    <div>
      
      <div className="card">
            <img src ={props.image}/>
            <div className="card-content">
                <button>{props.button}</button>
                <div className="date">{props.date}</div>
                <button className={`accordion ${setActive}`} onClick={toggleAccordion}>ttt</button>
                <h2>{props.heading}</h2>
                <p> Written by <span>{props.author}</span></p>
              
                
            </div>
        </div>
       
      
      <div
        ref={button}
        style={{ maxHeight: `${setHeight}` }}
        className="overflow"
      >
        <div
          className="hidden-text"
          dangerouslySetInnerHTML={{ __html: props.button }}
        />
      </div>
    </div>
  );
}

export default Card;
