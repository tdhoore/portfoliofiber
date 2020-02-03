import { store } from "../../redux/configureStore";
import work from "../../assets/projects.json";

import { currentItem, projects } from "./pageActions";

export const setCurrentItem = index => {
  store.dispatch(currentItem(index));
};

export const setProjects = () => {
  store.dispatch(projects(work));
};
