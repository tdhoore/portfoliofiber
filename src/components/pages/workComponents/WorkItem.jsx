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
          : `workItem ${props.side}`
      }
    >
      <article>
        <header className="headerWrapper">
          <h3>{props.content.title}</h3>
        </header>
        <div className="imgHolder">
          <img src={image} alt={props.title} />
        </div>
      </article>
    </Link>
  ) : null;
};

export default WorkItem;
