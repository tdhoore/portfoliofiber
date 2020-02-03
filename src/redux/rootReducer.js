import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import sceneReducer from "../components/scenes/sceneReducer";
import pageReducer from "../components/pages/pageReducer";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    sceneReducer: sceneReducer,
    pageReducer: pageReducer
  });

export default createRootReducer;
