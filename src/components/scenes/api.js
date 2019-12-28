import { store } from "../../redux/configureStore";
import { push } from "connected-react-router";
import { actions, canAnimateAction, curretPageIndex } from "./sceneActions";

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

  pages.forEach(page => {
    if (page.title.toLowerCase() === title.toLowerCase()) {
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

export const setCurretPageIndex = (
  index,
  animate = false,
  disableAll = false
) => {
  const pages = store.getState().sceneReducer.pages;

  if (index >= 0 && pages.length > index) {
    //index is present so change it
    if (!animate) {
      //if a nav item is pressed disable all animation from here on out
      if (disableAll) {
        setAllCanAnimate();
      }

      //push a new url and set the new page index
      store.dispatch(push(pages[index].url));
      store.dispatch(curretPageIndex(index));
    } else {
      //play outroAnimation
      //then in the hook itself use this function to set the new index
    }
  }
};
