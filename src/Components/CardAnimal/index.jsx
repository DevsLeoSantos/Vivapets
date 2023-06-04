import React from "react";
import Flag from "../Flag";
import "./styles.css";

import dogIcon from "../../assets/svg/Dog/dog.svg"

export default function CardAnimal(props) {
  return (
    <div className="card">
      <img src={props.animalImage} alt="" />
      <div className="info-animal-box">
        <div className="content">
          <p className="type">{props.animalType}</p>
          <p className="name">NAME:{props.animalName}</p>
        </div>
        <img src={dogIcon} alt="dogIcon" />
      </div>
      <div className="flags">
        <Flag color={props.color} text="PRETO" />
        <Flag color="#001AFF" text={props.breed} />
      </div>
    </div>
  );
}
