import React from "react";
import "./styles.css";


export default function Flag(props) {
  return (
    <div className="container-flag">
      <div className="elipse" style={{ backgroundColor: props.color }}></div>
      <span>{props.text}</span>
    </div>
  );
}
