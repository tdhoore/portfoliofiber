import React, { Suspense } from "react";
import * as THREE from "three";
import { Canvas } from "react-three-fiber";
import Effects from "../Effects";
import { useSelector } from "react-redux";

const BasicScene = props => {
  const glitch = useSelector(state => state.sceneReducer.glitch);

  return (
    <div style={{ height: "100vh" }}>
      <div className="gradiant"></div>
      <Canvas
        camera={{ position: [0, 2.16, 0], fov: 35 }}
        onCreated={({ gl }) => {
          if (gl) {
            gl.gammaInput = true;
            gl.toneMapping = THREE.Uncharted2ToneMapping;
            gl.alpha = true;
            gl.setClearColor(new THREE.Color("#0a0a0a"));
          }
        }}
      >
        <fog attach="fog" args={["#0a0a0a", 0, 16]} />
        <Suspense fallback={null}>{props.currentScene}</Suspense>
        <Effects glitch={glitch} />
      </Canvas>
    </div>
  );
};

export default BasicScene;
