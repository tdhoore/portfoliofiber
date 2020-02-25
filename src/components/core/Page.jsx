import React from "react";
import { setCurretPageIndex, setLastPageIndex } from "../scenes/api";
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
      case "Contact":
        return 3;
      default:
        return 1;
    }
  };

  const getPage = sceneName => {
    switch (sceneName) {
      case "Home":
        scrollController.canAnimate = true;
        return <Home />;
      case "Work":
        scrollController.canAnimate = props.match.params.title ? false : true;
        return <Work detail={props.match.params.title} />;
      case "About":
        scrollController.canAnimate = true;
        return <About />;
      default:
        scrollController.canAnimate = true;
        return <Work />;
    }
  };

  if (isFirstCall) {
    isFirstCall = false;

    const firstIndex = getInitPageIndex(props.route.title);

    setCurretPageIndex(firstIndex, false, false, props.route.url);
    setLastPageIndex(0);
  }

  return (
    <div style={{ display: "relative", height: "100vh" }}>
      <header className="mainHeader">
        <h1 className="hide">
          <span>Tim D'hoore</span>
        </h1>
        <Nav
          routes={props.allRoutes}
          scrollController={scrollController}
          isWorkDetail={props.match.params.title ? true : false}
        />
      </header>
      <main className="contentWrapper hide">{getPage(props.route.title)}</main>
    </div>
  );
};

export default Page;
