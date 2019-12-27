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

export const setAllCanAnimate = (canAnimate = false) => {
  store.dispatch(canAnimateAction("", canAnimate));
};

export const getCurrentPageIndex = () => {
  return store.getState().sceneReducer.currentPageIndex;
};

export const setCurretPageIndex = (index, animate = false) => {
  const pages = store.getState().sceneReducer.pages;

  if (index >= 0 && pages.length > index) {
    //index is present so change it
    if (!animate) {
      console.log("dfgfdg");
      //if a nav item is pressed disable all animation from here on out
      setAllCanAnimate();

      //push a new url and set the new page index
      store.dispatch(push(pages[index].url));
      store.dispatch(curretPageIndex(index));
    } else {
      //
      //store.dispatch(push(pages[index].url));
      //store.dispatch(curretPageIndex(index));
    }
  }
};
