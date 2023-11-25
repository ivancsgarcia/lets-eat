import React from "react";
import { Link } from "react-router-dom";
import "../css/navbot.css";

function Navbot() {
  return (
    <div className="navbot">
      <Link to={"/home"}>
        <img src="/images/svg/home.svg" alt="" />
      </Link>
      <Link to={"/search"}>
        <img src="/images/svg/search.svg" alt="" />
      </Link>
      <Link to={"/profile"}>
        <img src="/images/svg/user.svg" alt="" />
      </Link>
    </div>
  );
}

export default Navbot;
