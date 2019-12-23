import React, { Suspense } from "react";
import * as THREE from "three";
import "./App.css";
import { Canvas } from "react-three-fiber";
import Model from "./components/scenes/about";
import FallBack from "./FallBack";
import Effects from "./components/Effects";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <div className="gradiant"></div>
      <Canvas
        camera={{ position: [0, 2.16, 0], fov: 35 }}
        onCreated={({ gl }) => {
          gl.gammaInput = true;
          gl.toneMapping = THREE.Uncharted2ToneMapping;
          gl.alpha = true;
          gl.setClearColor(new THREE.Color("#0a0a0a"));
        }}
      >
        <fog attach="fog" args={["#141414", 0, 16]} />
        <Suspense fallback={<FallBack />}>
          <Model />
        </Suspense>

        <Effects />
      </Canvas>
    </div>
  );
}
/*
 <directionalLight
          color="#60CAE0"
          intensity={0.5}
          position={[-4.43, 30.469, -0.163]}
        />
*/
export default App;
