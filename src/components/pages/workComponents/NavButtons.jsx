import React from "react";
import { Link } from "react-router-dom";

const NavButtons = props => {
  return (
    <div className="">
      <button onClick={/* Get from API*/}>Previous</button>
      <p>
        {props.currentWork /* API */}/{props.totalWorks /* API */}
      </p>
      <button onClick={/* Get from API*/}>Next</button>
    </div>
  );
};

export default NavButtons;
