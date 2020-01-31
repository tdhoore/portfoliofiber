import React, { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas } from "react-three-fiber";
import Effects from "../Effects";
import HomeScene from "../scenes/HomeScene";
import ProjectsScene from "../scenes/ProjectsScene";
import AboutScene from "./AboutScene";
import { useSelector } from "react-redux";
import BgPillars from "./bgPillars";
import WorkScene from "./WorkScene";
import SignScene from "./SignScene";
import { useSpring, animated as a } from "react-spring/three";

const BasicScene = props => {
  const currentPageIndex = useSelector(
    state => state.sceneReducer.currentPageIndex
  );
  const pages = useSelector(state => state.sceneReducer.pages);

  //<div className="gradiant"></div>

  const [moveScene, setMoveScene] = useSpring(() => ({
    position: [0, 0, 0],
    config: true ? { mass: 5, tension: 350, friction: 100 } : { duration: 1 }
  }));

  useEffect(() => {
    moveSceneFunc();
  });

  const moveSceneFunc = () => {
    setMoveScene({
      position: pages[currentPageIndex].camPos
    });
  };

  const bloomScene = useRef();

  return (
    <div className="canvasHolder">
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
        <Suspense fallback={null}>
          <a.group name="completeScene" {...moveScene}>
            <scene name="bloom" ref={bloomScene}>
              <HomeScene />
              <WorkScene />
              <AboutScene />
              <BgPillars />
            </scene>
            <scene name="noBloom">
              <SignScene />
            </scene>
          </a.group>
          <Suspense fallback={<SignScene />}>
            <Effects glitch={false} bloomScene={bloomScene} />
          </Suspense>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BasicScene;
//<ProjectsScene />
