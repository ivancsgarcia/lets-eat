import React from "react";
import { Link } from "react-router-dom";
import "../css/tab.css";

function Tab() {
  return (
    <div className="tab">
      <table>
        <tr>
          <td>
            <Link to={"/info"}>
              <p>Information</p>
            </Link>
          </td>
          <td>
            <Link to={"/ingredients"}>
              <p>Ingredients</p>
            </Link>
          </td>
          <td>
            <Link to={"/directions"}>
              <p>Directions</p>
            </Link>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Tab;
