import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store, configureStore } from "./redux/configureStore";
import Routs from "./components/routs/Routs";

function App() {
  configureStore();

  return (
    <Provider store={store}>
      <Routs />
    </Provider>
  );
}
export default App;
