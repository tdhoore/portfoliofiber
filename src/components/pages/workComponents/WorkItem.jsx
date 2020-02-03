import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/img/tester.png";

const WorkItem = props => {
  return props.content ? (
    <Link
      to={props.content.link}
      className={
        props.position
          ? `workItem workItemBack workItemBack${props.position}`
          : `workItem`
      }
    >
      <article>
        <header className="headerWrapper">
          <h3>{props.content.title}</h3>
          <p>{props.content.category}</p>
        </header>
        <div className="imgHolder hide">
          <img src={image} alt={props.title} />
        </div>
      </article>
    </Link>
  ) : null;
};

export default WorkItem;
