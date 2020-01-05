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
        return <HomeScene scrollController={scrollController} />;
      case "Work":
        return <ProjectsScene scrollController={scrollController} />;
      case "About":
        return <AboutScene scrollController={scrollController} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <header className="mainHeader">
        <h1 className="mainTitle">
          <span>Tim D'hoore</span>
        </h1>
        <Nav routes={props.allRoutes} />
      </header>
      <main>
        <BaseScene currentScene={getScene(props.route.title)} />
      </main>
    </div>
  );
};

export default Page;
