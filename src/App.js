import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "react-three-fiber";
import Model from "./test";
import FallBack from "./FallBack";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas>
        <Suspense fallback={<FallBack />}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
/*
 <Suspense fallback={<div></div>}>
        <Model />
      </Suspense>
*/
