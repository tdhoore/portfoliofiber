import React from "react";
import NavButtons from "./workComponents/NavButtons";
import WorkItem from "./workComponents/WorkItem";

const Work = props => {
  return (
    <section className="workSection">
      <header className="hide">
        <h2>Work</h2>
      </header>
      <div className="workHolder">
        <WorkItem />
        <NavButtons />
      </div>
    </section>
  );
};

export default Work;
