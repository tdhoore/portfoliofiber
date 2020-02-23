import React, { Suspense, useEffect } from "react";
import * as THREE from "three";
import { Canvas } from "react-three-fiber";
import Effects from "../Effects";
import HomeScene from "../scenes/HomeScene";
import AboutScene from "./AboutScene";
import { useSelector } from "react-redux";
import BgPillars from "./bgPillars";
import WorkScene from "./WorkScene";
import SignScene from "./SignScene";
import { useSpring, animated as a } from "react-spring/three";
import FPSStats from "react-fps-stats";

const BasicScene = props => {
  const currentPageIndex = useSelector(
    state => state.sceneReducer.currentPageIndex
  );
  const lastPageIndex = useSelector(state => state.sceneReducer.lastPageIndex);
  const pages = useSelector(state => state.sceneReducer.pages);
  const currentItem = useSelector(state => state.pageReducer.currentItem);
  const projects = useSelector(state => state.pageReducer.projects);

  const [moveScene, setMoveScene] = useSpring(() => ({
    position: [0, 0, 0],
    config: true ? { mass: 5, tension: 350, friction: 100 } : { duration: 1 },
    onStart: () => {},
    onRest: () => {}
  }));

  useEffect(() => {
    moveSceneFunc();
  });

  const moveSceneFunc = () => {
    setMoveScene({
      position: pages[currentPageIndex].camPos
    });
  };

  return (
    <div className="canvasHolder">
      <FPSStats />
      <Canvas
        camera={{ position: [0, 2.16, 0], fov: 35 }}
        onCreated={({ gl }) => {
          if (gl) {
            gl.gammaInput = true;
            gl.toneMapping = THREE.Uncharted2ToneMapping;
            gl.setClearColor(new THREE.Color("#0a0a0a"));
          }
        }}
        pixelRatio={1}
      >
        <fog attach="fog" args={["#0a0a0a", 0, 45]} />
        <Suspense fallback={null}>
          <a.group name="completeScene" {...moveScene}>
            <HomeScene />
            <WorkScene />
            <AboutScene />
            <BgPillars />
            <SignScene currentImage={projects[currentItem]} />
          </a.group>
          <Suspense>
            <Effects />
          </Suspense>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BasicScene;
