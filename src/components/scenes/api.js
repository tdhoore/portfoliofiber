import { store } from "../../redux/configureStore";
import { push } from "connected-react-router";
import {
  curretPageIndex,
  lastPageIndex,
  visible,
  sceneRotation
} from "./sceneActions";

export const getCurrentPageIndex = () => {
  return store.getState().sceneReducer.currentPageIndex;
};

export const setLastPageIndex = index => {
  store.dispatch(lastPageIndex(index));
};

export const setVisible = (index = 0, isVisible = false) => {
  store.dispatch(visible(index, isVisible));
};

export const setSceneRotation = (rotZ = 0) => {
  store.dispatch(sceneRotation(rotZ));
};

export const getSceneRotation = () => {
  return store.getState().sceneReducer.sceneRotation;
};

export const setCurretPageIndex = (
  index = -1,
  animate = false,
  disableAll = false,
  url = ""
) => {
  const pages = store.getState().sceneReducer.pages;

  //set the lastPageIndex
  const lastPage = store.getState().sceneReducer.currentPageIndex;
  setLastPageIndex(lastPage);

  if (index < 0) {
    index = pages.length - 1;
  }

  if (pages.length <= index) {
    index = 0;
  }

  let newRot = store.getState().sceneReducer.sceneRotation;

  //update scene rotation
  if (lastPage !== index) {
    if (
      (lastPage === pages.length - 1 && index === 0) ||
      (index === pages.length - 1 && lastPage === 0)
    ) {
      //start new loop
      if (lastPage < index) {
        newRot -= Math.PI / 2;
      } else {
        newRot += Math.PI / 2;
      }
    } else {
      //just add to the direction
      if (lastPage < index) {
        const dif = index - lastPage;

        newRot += (Math.PI / 2) * dif;
      } else {
        const dif = lastPage - index;

        newRot -= (Math.PI / 2) * dif;
      }
    }
  }

  setSceneRotation(newRot);

  store.dispatch(curretPageIndex(index));

  if (url !== "") {
    store.dispatch(push(url));
  } else {
    store.dispatch(push(pages[index].url));
  }
};

export const goToUrl = url => {
  store.dispatch(push(url));
};

export const getLastPageIndex = () => {
  return store.getState().sceneReducer.lastPageIndex;
};
