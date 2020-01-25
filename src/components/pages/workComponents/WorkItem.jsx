import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/img/tester.png";

const WorkItem = props => {
  return (
    <Link
      to={props.content.link}
      className={
        props.position
          ? `workItem workItemBack workItemBack${props.position}`
          : `workItem`
      }
    >
      <article>
        <div className="headerWrapper">
          <header>
            <h3>{props.content.title}</h3>
            <p>{props.content.category}</p>
          </header>
        </div>
        <div className="imgHolder">
          <img src={image} alt={props.title} />
        </div>
      </article>
    </Link>
  );
};

export default WorkItem;
