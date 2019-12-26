import { store } from "../../redux/configureStore";
import { push } from "connected-react-router";
import { titleAndUrl, actions, canAnimateAction } from "./sceneActions";

export const setTitleAndUrl = (title = "", url = "") => {
  store.dispatch(push(url));
  store.dispatch(titleAndUrl(title, url));
};

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
  store.dispatch("", canAnimate);
};
