import React, { Suspense, useEffect } from "react";
import * as THREE from "three";
import { Canvas } from "react-three-fiber";
import Effects from "../Effects";
import HomeScene from "./HomeScene";
import AboutScene from "./AboutScene";
import { useSelector } from "react-redux";
import WorkScene from "./WorkScene";
import BgScene from "./BgScene";
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
        camera={{
          position: [5.24, 6.53, 5.24],
          //rotation: [1.18, 0.36, -0.71]
          near: 0,
          zoom: 230
        }}
        onCreated={({ gl, camera }) => {
          if (gl) {
            gl.gammaInput = true;
            gl.toneMapping = THREE.Uncharted2ToneMapping;
            gl.setClearColor(new THREE.Color("#031829"));
          }

          if (camera) {
            camera.lookAt(new THREE.Vector3(0, 1.84973, 0));
          }
        }}
        pixelRatio={1}
        orthographic
      >
        <ambientLight />
        <Suspense fallback={null}>
          <group position={[0, -0.3, 0]}>
            <AboutScene />
            <BgScene />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BasicScene;
/*
<a.group name="completeScene">
            
            <WorkScene />
          </a.group>
   <Suspense>
            <Effects />
          </Suspense>



<HomeScene />
            <WorkScene />
            <AboutScene />
            <BgPillars />
            <SignScene currentImage={projects[currentItem]} />
*/
