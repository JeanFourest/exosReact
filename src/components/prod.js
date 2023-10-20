import React from "react";
import "./prod.css"

export default function Prod(props) {
  return (
    <div className="bodyProd">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  );
}
