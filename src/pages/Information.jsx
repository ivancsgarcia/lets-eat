import React from "react";
import { Link } from "react-router-dom";
import "../css/information.css";
import Tab from "../components/Tab";
import Navbot from "../components/Navbot";

function Information() {
  return (
    <div className="information">
      <div className="top">
        <Link to={"/home"}>
          <img src="/images/svg/chevron-left.svg" alt="" className="left" />
        </Link>
        <Link>
          <img src="/images/svg/bookmark.svg" alt="" className="bookmark" />
        </Link>
      </div>

      <div className="recipe">
        <h1>Recipe Name</h1>
        <img src="" alt="" />
      </div>

      <Tab />

      <div className="info">
        <div className="inf">
          <h3>Information:</h3>
        </div>
        <div className="cook-time">
          <h3>Cook Time:</h3>
        </div>
        <div className="nutritions">
          <h3>Nutritional Values:</h3>
        </div>
      </div>

      <Navbot />
    </div>
  );
}

export default Information;
