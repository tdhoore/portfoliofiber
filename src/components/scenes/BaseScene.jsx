import React, { Suspense } from "react";
import * as THREE from "three";
import { Canvas } from "react-three-fiber";
import Effects from "../Effects";
import { useSelector } from "react-redux";
import BgPillars from "./bgPillars";

const BasicScene = props => {
  const glitch = useSelector(state => state.sceneReducer.glitch);
  //<div className="gradiant"></div>
  return (
    <div style={{ height: "100vh" }}>
      <Canvas
        camera={{ position: [0, 2.16, 0], fov: 35 }}
        onCreated={({ gl }) => {
          if (gl) {
            gl.gammaInput = true;
            gl.toneMapping = THREE.Uncharted2ToneMapping;
            gl.setClearColor(new THREE.Color("#0a0a0a"));
          }
        }}
      >
        <fog attach="fog" args={["#0a0a0a", 0, 45]} />
        <Suspense fallback={null}>{props.currentScene}</Suspense>
        <Suspense fallback={null}>
          <BgPillars currentPageIndex={props.currentPageIndex} />
        </Suspense>
        <Effects glitch={glitch} />
      </Canvas>
    </div>
  );
};

export default BasicScene;
