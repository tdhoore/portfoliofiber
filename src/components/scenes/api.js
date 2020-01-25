import { store } from "../../redux/configureStore";
import { push } from "connected-react-router";
import {
  actions,
  canAnimateAction,
  curretPageIndex,
  glitch
} from "./sceneActions";

export const setActions = (anims = {}) => {
  store.dispatch(actions(anims));
  return getCurrentactions();
};

export const clearActions = () => {
  store.dispatch(actions({}));
};

export const getCurrentactions = () => {
  return store.getState().sceneReducer.actions;
};

export const setCanAnimate = (title = "", canAnimate = false) => {
  store.dispatch(canAnimateAction(title, canAnimate));
};

export const getCanAnimate = (title = "") => {
  const pages = store.getState().sceneReducer.pages;
  let result = true;

  pages.forEach((page, index) => {
    if (typeof title === "string") {
      if (page.title.toLowerCase() === title.toLowerCase()) {
        result = page.canAnimate;
      }
    } else if (index === title) {
      result = page.canAnimate;
    }
  });

  return result;
};

export const setAllCanAnimate = (canAnimate = false) => {
  store.dispatch(canAnimateAction("", canAnimate));
};

export const getCurrentPageIndex = () => {
  return store.getState().sceneReducer.currentPageIndex;
};

export const setInitCurretPageIndex = index => {
  store.dispatch(curretPageIndex(index));
};

export const setCurretPageIndex = (
  index = -1,
  animate = false,
  disableAll = false,
  url = ""
) => {
  const pages = store.getState().sceneReducer.pages;

  if (index >= 0 && pages.length > index) {
    if (disableAll) {
      //setAllCanAnimate();
    }

    store.dispatch(curretPageIndex(index));

    if (url !== "") {
      store.dispatch(push(url));
    } else {
      store.dispatch(push(pages[index].url));
    }
  }
};

export const playGlitch = () => {
  store.dispatch(glitch(true));

  //deactivate after timer
  setTimeout(() => {
    store.dispatch(glitch(false));
  }, 250);
};
