import { store } from "../../redux/configureStore";
import { push } from "connected-react-router";
import { titleAndUrl } from "./sceneActions";

export const setTitleAndUrl = (title = "", url = "") => {
  store.dispatch(push(url));
  store.dispatch(titleAndUrl(title, url));
};
