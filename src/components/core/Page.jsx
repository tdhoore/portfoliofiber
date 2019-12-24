import React from "react";
import Nav from "./Nav";
import HomeScene from "../scenes/HomeScene";
import ProjectsScene from "../scenes/ProjectsScene";
import AboutScene from "../scenes/AboutScene";
import BaseScene from "../scenes/BaseScene";

const Page = props => {
  const getScene = sceneName => {
    switch (sceneName) {
      case "Home":
        return <HomeScene />;
      case "Work":
        return <ProjectsScene />;
      case "About":
        return <AboutScene />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Nav routes={props.allRoutes} />
      <BaseScene currentScene={getScene(props.route.title)} />
    </div>
  );
};

export default Page;
