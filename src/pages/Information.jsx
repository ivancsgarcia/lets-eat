import React from "react";
import { Link } from "react-router-dom";
import "../css/information.css";
import Tab from "../components/Tab";
import Navbot from "../components/Navbot";
import Dish from "../components/Dish";

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
        <Dish
          title={"Choc-Mint Crackle Cheesecake Lasagne"}
          imageUrl={"/images/Choc-Mint_Cheesecake.webp"}
        />
      </div>

      <Tab />

      <div className="info">
        <div className="inf">
          <h3>Information:</h3>
          <p>
            This no-bake Choc-Mint Cheesecake is a crowd-pleasing dessert to
            celebrate any momentous occasion! With its chocolate crackle base,
            creamy choc-mint cheesecake filling and chocolate candy toppings,
            it's a towering treat that you can make up to two days ahead.
          </p>
        </div>
        <div className="cook-time">
          <h3>Cook Time:</h3>
          <p>
            <span>Prep:</span> 35 min + 4 hrs setting time <br />
            <br /> <span>Cook:</span> 5 min
          </p>
        </div>
        <div className="nutritions">
          <h3>Nutritional Values:</h3>
          <p>No Data</p>
        </div>
      </div>

      <Navbot />
    </div>
  );
}

export default Information;
