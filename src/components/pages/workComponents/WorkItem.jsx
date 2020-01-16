import React from "react";
import { Link } from "react-router-dom";

const WorkItem = props => {
  return (
    <Link to={props.url}>
      <article className="">
        <header>
          <h3>{props.title}</h3>
          <p>{props.category}</p>
        </header>
        <img src={props.image} alt={props.title} />
      </article>
    </Link>
  );
};

export default WorkItem;
