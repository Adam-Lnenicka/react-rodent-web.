import React, { useState, useRef } from "react";


function Card(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");


  const detail = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${detail.current.scrollHeight}px`
    );

  }

  return (
    <div>
      
      <div className="card">
            <img src ={props.image}/>
            <div className="card-content">
                <h2>{props.name}</h2>
                <p>Suborder: {props.suborder}</p>
                <p>Family: {props.family}</p>
                <p>Genus: {props.genus}</p>
                <button className={`accordion ${setActive}`} onClick={toggleAccordion}>Rodent details</button>                
                <br/>
                <i>Source: <a href={props.source}  target="_blank">{props.source}</a></i>
            </div>
        </div>
       
      
      <div
        ref={detail}
        style={{ maxHeight: `${setHeight}` }}
        className="overflow"
      >
        <div
          className="hidden-text"
          dangerouslySetInnerHTML={{ __html: props.detail }}
        />
      </div>
    </div>
  );
}

export default Card;
