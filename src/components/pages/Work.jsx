import React, { useEffect, useState } from "react";
import WorkItem from "./workComponents/WorkItem";
import { setProjects, setCurrentItem, setWorkRot } from "./api";
import { useSelector } from "react-redux";
import { useTransition, animated as a, useSpring } from "react-spring";
import WorkDetail from "./workComponents/WorkDetail";

const Work = props => {
  const currentItem = useSelector(state => state.pageReducer.currentItem);
  const projects = useSelector(state => state.pageReducer.projects);
  const workRot = useSelector(state => state.pageReducer.workRotation);
  const sideClasses = ["front", "bottom", "back", "top"];

  setProjects();

  const transitions = useTransition(!props.detail, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  const [rotWork, setRotWork] = useSpring(() => ({
    rot: 0,
    config: { mass: 5, tension: 350, friction: 100 }
  }));

  useEffect(() => {
    window.addEventListener("keydown", updateRot);

    //update Rotation
  });

  const round = (number, increment, offset) => {
    return Math.ceil((number - offset) / increment) * increment + offset;
  };

  const updateRot = (e, dir = 1) => {
    //set hasRotated = false

    //update the rotation
    setRotWork({
      rot: round(rotWork.rot.value, 90, 0) + 90 * dir,
      onStart: () => {
        //update the current item
        setCurrentItem(calcCurrentItem(currentItem + dir));
      }
    });
  };

  const calcCurrentItem = newIndex => {
    if (newIndex < 0) {
      return projects.length + newIndex;
    }

    if (newIndex >= projects.length) {
      return projects.length - newIndex;
    }

    return newIndex;
  };

  const setSideClass = (dir = 0) => {
    const currentRot = round(rotWork.rot.value, 90, 0);
    const index = currentRot === 0 ? currentRot : currentRot / 90;
    let adjustedIndex = index;

    if (index + dir < 0) {
      //negative to index
      adjustedIndex = sideClasses.length - 1 - (index + dir);
    }

    if (index + dir >= sideClasses.length) {
      console.log(index + dir);
      //positive to index
      adjustedIndex = index + dir - sideClasses.length;
    }

    return 0;
  };

  return transitions.map(({ item, key, transProps }) =>
    item ? (
      <a.section className="workSection" style={transProps} key={key}>
        <header className="hide">
          <h2>Work</h2>
        </header>
        <a.div
          className="workHolder"
          style={{
            transform: rotWork.rot.interpolate(
              r => `translateZ(-30vh) rotateX(${r}deg)`
            )
          }}
        >
          {projects.map(project => {
            if (currentItem === project.id) {
              setSideClass();
              return <WorkItem content={projects[project.id]} side="front" />;
            }

            if (currentItem - 1 === project.id) {
              return <WorkItem content={projects[project.id]} side="top" />;
            }

            if (currentItem + 1 === project.id) {
              return <WorkItem content={projects[project.id]} side="bottom" />;
            }
          })}
        </a.div>
      </a.section>
    ) : (
      <a.div style={transProps} key={key}>
        <WorkDetail linkTitle={props.detail} />
      </a.div>
    )
  );
};

export default Work;
/*
<TransitionGroup className="workHolder">
          <CSSTransition
            in={true}
            appear={true}
            classNames="workAnim"
            timeout={292}
            key={currentItem}
          >
            <WorkItem content={projects[currentItem]} />
          </CSSTransition>
        </TransitionGroup>
*/
