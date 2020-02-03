import React from "react";
import { useSelector } from "react-redux";
import { setCurrentItem } from "../api";

const WorkNav = props => {
  const currentItem = useSelector(state => state.pageReducer.currentItem);
  const projects = useSelector(state => state.pageReducer.projects);

  const updateCurrentItem = dir => {
    if (currentItem + dir >= 0 && currentItem + dir < projects.length) {
      setCurrentItem(currentItem + dir);
    }
  };

  const map = (value, x1, y1, x2, y2) =>
    ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;

  return (
    <div className="workNav">
      <button
        className={
          currentItem === 0
            ? "solidButton workNavButtons workNavButtonHidden"
            : "solidButton workNavButtons workNavButtonLeft"
        }
        onClick={() => updateCurrentItem(-1)}
      ></button>
      <div className="workCounter">
        {projects.map((project, index) => {
          let scale = map(Math.abs(currentItem - index), 4, 0, 0.2, 1);
          let opacity = map(Math.abs(currentItem - index), 4, 0, 0.4, 1);

          if (scale < 0.2) {
            scale = 0.2;
          }

          if (opacity < 0.4) {
            opacity = 0.4;
          }

          return (
            <div
              key={project.id}
              className={currentItem === index ? "big" : ""}
            ></div>
          );
        })}
      </div>
      <button
        className={
          currentItem === projects.length - 1
            ? "solidButton workNavButtons workNavButtonHidden"
            : "solidButton workNavButtons workNavButtonRight"
        }
        onClick={() => updateCurrentItem(1)}
      ></button>
    </div>
  );
};

export default WorkNav;
/*

*/
