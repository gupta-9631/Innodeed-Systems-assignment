import React from "react";
import "./slider.css";
import Card from "./Card.js";
import cars from "../data";

const slider = () => {
  let box = document.querySelector(".car-container");
  const leftBtn = () => {
    let width = box.offsetWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  };

  const nextBtn = () => {
    let width = box.offsetWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };

  return (
    <div className="car-carousel">
      <div className="car-container">
        {cars.map((car) => {
          return <Card data={car} />;
        })}
      </div>
      <div className="button-container">
        <button className="left-btn" onClick={leftBtn}>
          <p>&lt;</p>
        </button>
        <button className="next-btn" onClick={nextBtn}>
          <p>&gt;</p>
        </button>
      </div>
    </div>
  );
};

export default slider;
