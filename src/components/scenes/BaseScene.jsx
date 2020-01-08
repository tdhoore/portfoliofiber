import React, { Suspense } from "react";
import * as THREE from "three";
import { Canvas } from "react-three-fiber";
import Effects from "../Effects";
import { useSelector } from "react-redux";
import BgPillars from "./bgPillars";
import { setAllCanAnimate } from "./api";

let isFirstCall = true;

const BasicScene = props => {
  const glitch = useSelector(state => state.sceneReducer.glitch);
  //<div className="gradiant"></div>

  //disable animations if not page 0
  if (props.currentPageIndex !== 0 && isFirstCall) {
    setAllCanAnimate(false);
  }

  isFirstCall = false;

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
          {props.currentPageIndex === 2 ? <BgPillars /> : null}
        </Suspense>
        <Effects glitch={glitch} />
      </Canvas>
    </div>
  );
};

export default BasicScene;
