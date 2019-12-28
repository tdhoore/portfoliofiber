import React from "react";
import Nav from "./Nav";
import HomeScene from "../scenes/HomeScene";
import ProjectsScene from "../scenes/ProjectsScene";
import AboutScene from "../scenes/AboutScene";
import BaseScene from "../scenes/BaseScene";
import { useSelector } from "react-redux";
import ScrollController from "../core/ScrollController";

const scrollController = new ScrollController();

const Page = props => {
  const currentPageIndex = useSelector(
    state => state.sceneReducer.currentPageIndex
  );

  //add listender
  scrollController.addListener();

  //check if animating
  scrollController.updateCanAnimate(currentPageIndex);

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
