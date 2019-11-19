import React, { Suspense } from "react";
import * as THREE from "three";
import "./App.css";
import { Canvas } from "react-three-fiber";
import Model from "./components/about";
import FallBack from "./FallBack";
import Effects from "./components/Effects";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas
        camera={{ position: [-0.083355, 2, -1], fov: 50 }}
        gl={{ alpha: false }}
        onCreated={({ gl }) => {
          gl.gammaInput = true;
          gl.toneMapping = THREE.Uncharted2ToneMapping;
          gl.setClearColor(new THREE.Color("#0a0a0a"));
        }}
      >
        <fog attach="fog" args={["#0a0a0a", 1, 150]} />
        <Suspense fallback={<FallBack />}>
          <Model />
        </Suspense>
        <Effects />
        <directionalLight
          color="#60CAE0"
          intensity={3}
          rotation={[-2.45758, 3.62313, 81.7114]}
        />
      </Canvas>
    </div>
  );
}

export default App;
