import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="container">
        <h2>{props.data.bodyType}</h2>
        <h2>{props.data.modelName}</h2>
        <div className="img-Container">
          <img src={props.data.imageUrl} alt="" />
        </div>
      </div>
      <div>
        <a href="#">Learn</a>
        <a href="#">Shop</a>
      </div>
    </div>
  );
};

export default Card;
