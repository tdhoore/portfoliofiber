import { store } from "../../redux/configureStore";
import work from "../../assets/projects.json";
import { currentItem, projects, lastItem, workRot } from "./pageActions";

export const setCurrentItem = index => {
  store.dispatch(currentItem(index));
};

export const setProjects = () => {
  store.dispatch(projects(work));
};

export const setWorkRot = deg => {
  const currentRot = store.getState().pageReducer.workRotation;
  store.dispatch(workRot(currentRot + deg));
};

export const checkCurrentItem = linkTitle => {
  if (linkTitle !== undefined) {
    const projects = store.getState().pageReducer.projects;
    const currentItem = store.getState().pageReducer.currentItem;

    projects.forEach(work => {
      if (work.link === `/work/${linkTitle}`) {
        //found it
        if (currentItem !== work.id) {
          setCurrentItem(work.id);
        }
      }
    });
  }
};
