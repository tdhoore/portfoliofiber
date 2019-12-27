import React, { useEffect } from "react";
import Nav from "./Nav";
import HomeScene from "../scenes/HomeScene";
import ProjectsScene from "../scenes/ProjectsScene";
import AboutScene from "../scenes/AboutScene";
import BaseScene from "../scenes/BaseScene";
import { useSelector } from "react-redux";

const Page = props => {
  const pages = useSelector(state => state.sceneReducer.pages);

  const getScene = sceneName => {
    switch (sceneName) {
      case "Home":
        return <HomeScene canAnimate={pages[0].canAnimate} />;
      case "Work":
        return <ProjectsScene canAnimate={pages[1].canAnimate} />;
      case "About":
        return <AboutScene canAnimate={pages[2].canAnimate} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    //set inital scroll controlls
  }, []);

  return (
    <div>
      <Nav routes={props.allRoutes} />
      <BaseScene currentScene={getScene(props.route.title)} />
    </div>
  );
};

export default Page;
