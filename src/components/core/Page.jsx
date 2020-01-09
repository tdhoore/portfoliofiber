import React from "react";
import Nav from "./Nav";
import HomeScene from "../scenes/HomeScene";
import ProjectsScene from "../scenes/ProjectsScene";
import AboutScene from "../scenes/AboutScene";
import { useSelector } from "react-redux";
import ScrollController from "../core/ScrollController";
import { setCurretPageIndex } from "../scenes/api";

const scrollController = new ScrollController();
let isFirstCall = true;

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

  const getInitPageIndex = sceneName => {
    switch (sceneName) {
      case "Home":
        return 0;
      case "Work":
        return 1;
      case "About":
        return 2;
      default:
        return 1;
    }
  };

  if (isFirstCall) {
    isFirstCall = false;
    setCurretPageIndex(getInitPageIndex(props.route.title));
  }

  return (
    <div>
      <header className="mainHeader">
        <h1 className="mainTitle">
          <span>Tim D'hoore</span>
        </h1>
        <Nav routes={props.allRoutes} scrollController={scrollController} />
      </header>
    </div>
  );
};

export default Page;
