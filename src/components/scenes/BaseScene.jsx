import React, { Suspense } from "react";
import * as THREE from "three";
import { Canvas } from "react-three-fiber";
import Effects from "../Effects";
import { useSelector } from "react-redux";
import { useSpring, animated as a } from "react-spring/three";

const BasicScene = props => {
  const glitch = useSelector(state => state.sceneReducer.glitch);

  const currentPageIndex = useSelector(
    state => state.sceneReducer.currentPageIndex
  );

  const [fogAnim] = useSpring(() => ({
    distance: currentPageIndex > 0 ? 16 : 14,
    config: { mass: 5, tension: 350, friction: 100 }
  }));

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
          args={fogAnim.distance.interpolate(d => ["#0a0a0a", 0, d])}
        />
        <Suspense fallback={null}>{props.currentScene}</Suspense>
        <Effects glitch={glitch} />
      </Canvas>
    </div>
  );
};

export default BasicScene;
