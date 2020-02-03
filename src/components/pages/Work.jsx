import React, { useState } from "react";
import WorkItem from "./workComponents/WorkItem";
import { setProjects } from "./api";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import WorkNav from "./workComponents/WorkNav";
import { useSelector } from "react-redux";

const Work = props => {
  const currentItem = useSelector(state => state.pageReducer.currentItem);
  const projects = useSelector(state => state.pageReducer.projects);

  setProjects();

  return (
    <section className="workSection">
      <header className="hide">
        <h2>Work</h2>
      </header>
      <TransitionGroup>
        <CSSTransition
          in={true}
          classNames="workAnim"
          timeout={292}
          key={currentItem}
        >
          <div className="workHolder">
            <WorkItem content={projects[currentItem]} />
            <WorkNav />
          </div>
        </CSSTransition>
      </TransitionGroup>
    </section>
  );
};

export default Work;
