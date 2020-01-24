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
        <button className="solidButton workNavButtons"></button>
        <WorkItem />
        <button className="solidButton workNavButtons"></button>
      </div>
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
