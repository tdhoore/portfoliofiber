import React, { Suspense, useEffect } from "react";
import * as THREE from "three";
import { Canvas } from "react-three-fiber";
import Effects from "../Effects";
import HomeScene from "./HomeScene";
import AboutScene from "./AboutScene";
import { useSelector } from "react-redux";
import WorkScene from "./WorkScene";
import CubeScene from "./CubeScene";
import BgScene from "./BgScene";
import { useSpring, animated as a } from "react-spring/three";
import FPSStats from "react-fps-stats";
import { Fog } from "three";

const BasicScene = props => {
  const currentPageIndex = useSelector(
    state => state.sceneReducer.currentPageIndex
  );
  const lastPageIndex = useSelector(state => state.sceneReducer.lastPageIndex);
  const sceneRotation = useSelector(state => state.sceneReducer.sceneRotation);
  const pages = useSelector(state => state.sceneReducer.pages);
  const currentItem = useSelector(state => state.pageReducer.currentItem);
  const projects = useSelector(state => state.pageReducer.projects);

  const [moveScene, setMoveScene] = useSpring(() => ({
    rotation: [0, 0, 0],
    config: { mass: 5, tension: 350, friction: 100 }
  }));

  const [placeScene, setPlaceScene] = useSpring(() => ({
    position: [0, 0, 0],
    scale: [1, 1, 1],
    config: { mass: 5, tension: 350, friction: 100 }
  }));

  useEffect(() => {
    moveSceneFunc();
    placeSceneFunc();
  });

  const placeSceneFunc = () => {
    const place = pages[currentPageIndex].moveMe;
    console.log(place);
    setPlaceScene({
      position: place.position,
      scale: place.scale
    });
  };

  const moveSceneFunc = () => {
    setMoveScene({
      rotation: [0, 0, sceneRotation]
    });
  };

  return (
    <div className="canvasHolder">
      <FPSStats />
      <Canvas
        camera={{
          position: [5.24, 6.53, 5.24],
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
        <ambientLight color="#031829" intensity={0.7} />
        <Suspense fallback={null}>
          <a.group position={[0, -0.3, 0]} {...moveScene} {...placeScene}>
            <WorkScene />
            <AboutScene />
            <CubeScene />
          </a.group>
          <BgScene />
          <Effects />
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
   



<HomeScene />
            <WorkScene />
            <AboutScene />
            <BgPillars />
            <SignScene currentImage={projects[currentItem]} />
*/
