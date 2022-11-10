import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="container">
        <div className="bodyType-text">{props.data.bodyType}</div>
        <div className="text-container">
          <span className="model-text">{props.data.modelName}</span>
          <span className="model-type-text">{props.data.modelType}</span>
        </div>
        <div className="img-Container">
          <img className="image" src={props.data.imageUrl} alt="" />
        </div>
      </div>
      <div className="link">
        <a className="page-link" href="#dsaaaaaf">
          Learn &gt;
        </a>
        <a className="page-link" href="#dfdsf">
          Shop &gt;
        </a>
      </div>
    </div>
  );
};

export default Card;
