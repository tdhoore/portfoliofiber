import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/img/tester.png";

const WorkItem = props => {
  return (
    <Link to={props.url} className="workItem">
      <article>
        <header>
          <h3>Oreo cake</h3>
          <p>category</p>
        </header>
        <div className="imgHolder">
          <img src={image} alt={props.title} />
        </div>
      </article>
    </Link>
  );
};

export default WorkItem;
