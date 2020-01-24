import React, { useState, useEffect } from "react";
import WorkItem from "./workComponents/WorkItem";
import { useTransition, animated as a, useSpring } from "react-spring";
import projects from "../../assets/projects.json";

const Work = props => {
  const [currentItem, setCurrentItem] = useState(0);
  const [dir, setDir] = useState(0);

  const delay = useSpring({
    from: {
      transform: "perspective(1024px) translateZ(-100px)",
      opacity: 0
    },
    to: {
      transform: "perspective(1024px) translateZ(0) ",
      opacity: 1
    },
    config: { mass: 5, tension: 350, friction: 100 },
    delay: 1200
  });

  const transitions = useTransition(projects[currentItem], item => item.id, {
    from: {
      transform:
        dir >= 0
          ? "perspective(1024px) translateX(100%) translateZ(-400px) rotateY(-10deg)"
          : "perspective(1024px) translateX(-100%) translateZ(-400px) rotateY(10deg)",
      opacity: 0
    },
    enter: {
      transform: "perspective(1024px) translateX(0) translateZ(0) rotateY(0)",
      opacity: 1
    },
    leave: {
      transform:
        dir > 0
          ? "perspective(1024px) translateX(-100%) translateZ(-400px) rotateY(-10deg)"
          : "perspective(1024px) translateX(100%) translateZ(-400px) rotateY(10deg)",
      opacity: 0
    }
  });

  useEffect(() => {
    window.addEventListener("keydown", () => {
      setDir(1);
      setCurrentItem(currentItem + 1);
    });
  });

  return (
    <section className="workSection">
      <header className="hide">
        <h2>Work</h2>
      </header>
      <a.div className="workHolder" style={{ ...delay }}>
        {transitions.map(({ item, props, key }) => (
          <a.div key={key} style={props} className="workAnim">
            <button className="solidButton workNavButtons workNavButtonLeft"></button>
            <WorkItem content={item} />
            <button className="solidButton workNavButtons workNavButtonRight"></button>
          </a.div>
        ))}
      </a.div>
    </section>
  );
};

export default Work;
/*
<WorkItem position={-1} />
        <WorkItem />
        <WorkItem position={1} />
        <NavButtons />
*/
