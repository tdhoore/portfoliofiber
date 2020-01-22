import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/img/tester.png";

const WorkItem = props => {
  return (
    <Link
      to={"/work"}
      className={
        props.position
          ? `workItem workItemBack workItemBack${props.position}`
          : `workItem`
      }
    >
      <article>
        <div className="headerWrapper">
          <header>
            <h3>Oreo cake</h3>
            <p>category</p>
          </header>
        </div>
        <Link className="imgHolder">
          <img src={image} alt={props.title} />
        </Link>
      </article>
    </Link>
  );
};

export default WorkItem;
