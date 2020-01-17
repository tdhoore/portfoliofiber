import React from "react";
import { Link } from "react-router-dom";

const WorkItem = props => {
  return (
    <Link to={props.url} className="workItem">
      <article>
        <header>
          <h3>{props.title}</h3>
          <p>{props.category}</p>
        </header>
        <div className="imgHolder">
          <img src={props.image} alt={props.title} />
        </div>
      </article>
    </Link>
  );
};

export default WorkItem;
