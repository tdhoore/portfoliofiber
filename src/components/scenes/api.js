import { store } from "../../redux/configureStore";
import { push } from "connected-react-router";
import { titleAndUrl, actions } from "./sceneActions";

export const setTitleAndUrl = (title = "", url = "") => {
  store.dispatch(push(url));
  store.dispatch(titleAndUrl(title, url));
};

export const setActions = (anims = {}) => {
  store.dispatch(actions(anims));
  console.log(getCurrentactions());
  return getCurrentactions();
};

export const clearActions = () => {
  store.dispatch(actions({}));
};

export const getCurrentactions = () => {
  return store.getState().sceneReducer.actions;
};
