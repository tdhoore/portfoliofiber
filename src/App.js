import React, { Suspense } from "react";
import * as THREE from "three";
import "./App.css";
import { Canvas } from "react-three-fiber";
import Model from "./components/projects";
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
          gl.setClearColor(new THREE.Color("#141414"));
        }}
        //0d0d0d
      >
        <fog attach="fog" args={["#141414", 1, 100]} />
        <Suspense fallback={<FallBack />}>
          <Model />
        </Suspense>
        <directionalLight
          color="#60CAE0"
          intensity={2}
          position={[5, 12, 2.3]}
        />
        <Effects />
      </Canvas>
    </div>
  );
}

export default App;
