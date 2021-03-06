import React from "react";
import "./index.scss";

function Card(props) {
  return (
    <div role={"presentation"} className={"glassCard"}>
      <div role={"contentinfo"} className={"content"}>
        <h1> {props.num} </h1>
        <h3> {props.title} </h3>
        <p>{props.desc}</p>
        <button>{"Read More"}</button>
      </div>
    </div>
  );
}

export default Card;
