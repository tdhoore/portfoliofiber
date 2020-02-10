import React from "react";
import WorkItem from "./workComponents/WorkItem";
import { setProjects } from "./api";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import WorkNav from "./workComponents/WorkNav";
import { useSelector } from "react-redux";
import { useTransition, animated as a } from "react-spring";
import WorkDetail from "./workComponents/WorkDetail";

const Work = props => {
  const currentItem = useSelector(state => state.pageReducer.currentItem);
  const projects = useSelector(state => state.pageReducer.projects);

  setProjects();

  const transitions = useTransition(!props.detail, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return transitions.map(({ item, key, transProps }) =>
    item ? (
      <a.section className="workSection" style={transProps} key={key}>
        <header className="hide">
          <h2>Work</h2>
        </header>
        <TransitionGroup>
          <CSSTransition
            in={true}
            appear={true}
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
      </a.section>
    ) : (
      <a.div style={transProps} key={key}>
        <WorkDetail linkTitle={props.detail} />
      </a.div>
    )
  );
};

export default Work;
