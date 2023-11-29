import React from "react";
import "../css/dish.css";

function Dish({ title, imageUrl }) {
  return (
    <div className="dish">
      <h1 className="card-title">{title}</h1>
      <img src={imageUrl} alt={title} className="card-image" />
    </div>
  );
}

export default Dish;
