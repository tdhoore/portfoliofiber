import React, { Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas } from "react-three-fiber";
import Effects from "../Effects";
import { useSelector } from "react-redux";
import { useSpring, animated as a } from "react-spring/three";
import BgPillars from "./bgPillars";
import { getCurrentPageIndex } from "./api";

const BasicScene = props => {
  const glitch = useSelector(state => state.sceneReducer.glitch);

  console.log("index", props.currentPageIndex);
  const [fogAnim, setFogAnim] = useSpring(() => ({
    distance: props.currentPageIndex > 0 ? 45 : 14,
    config: { mass: 5, tension: 350, friction: 100 }
  }));

  useEffect(() => {
    console.log(props.currentPageIndex > 0);
    setFogAnim({
      distance: props.currentPageIndex > 0 ? 45 : 14
    });
  });

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
        <a.fog
          attach="fog"
          args={fogAnim.distance.interpolate(d => {
            console.log(d);

            return ["#0a0a0a", 0, d];
          })}
        />
        <Suspense fallback={null}>{props.currentScene}</Suspense>
        <Suspense fallback={null}>
          <BgPillars />
        </Suspense>
        <Effects glitch={glitch} />
      </Canvas>
    </div>
  );
};

export default BasicScene;
