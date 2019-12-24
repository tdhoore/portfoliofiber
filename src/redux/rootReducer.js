import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import sceneReducer from "../components/scenes/sceneReducer";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    sceneReducer: sceneReducer
  });

export default createRootReducer;
