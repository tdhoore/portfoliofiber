import React from "react";
import { setCurretPageIndex } from "../scenes/api";
import Home from "../pages/Home";
import Work from "../pages/Work";
import About from "../pages/About";
import Nav from "./Nav";
import { useSelector } from "react-redux";
import ScrollController from "./ScrollController";

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

  const getPage = sceneName => {
    switch (sceneName) {
      case "Home":
        return <Home />;
      case "Work":
        return <Work detail={props.match.params.title} />;
      case "About":
        return <About />;
      default:
        return <Work />;
    }
  };

  if (isFirstCall) {
    isFirstCall = false;
    setCurretPageIndex(
      getInitPageIndex(props.route.title),
      false,
      false,
      props.route.url
    );
  }

  return (
    <div style={{ display: "relative", height: "100vh" }}>
      <header className="mainHeader">
        <h1 className="mainTitle">
          <span>Tim D'hoore</span>
        </h1>
        <Nav routes={props.allRoutes} scrollController={scrollController} />
      </header>
      <main className="contentWrapper">{getPage(props.route.title)}</main>
    </div>
  );
};

export default Page;
