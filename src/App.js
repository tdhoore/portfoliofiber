import React from "react";
import { Provider } from "react-redux";
import { store, configureStore } from "./redux/configureStore";
import Routs from "./components/routs/Routs";
import ScrollController from "./components/core/ScrollController";

function App() {
  configureStore();

  const scrollController = new ScrollController();

  scrollController.addListener();

  return (
    <Provider store={store}>
      <Routs />
    </Provider>
  );
}
export default App;
