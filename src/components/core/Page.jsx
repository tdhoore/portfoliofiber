import React from "react";
import { setCurretPageIndex } from "../scenes/api";

let isFirstCall = true;

const Page = props => {
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

  return <div></div>;
};
//<div className="tester">text</div>
export default Page;
