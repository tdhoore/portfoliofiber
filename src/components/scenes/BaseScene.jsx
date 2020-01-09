import React, { Suspense, useEffect } from "react";
import * as THREE from "three";
import { Canvas } from "react-three-fiber";
import Effects from "../Effects";
import HomeScene from "../scenes/HomeScene";
import ProjectsScene from "../scenes/ProjectsScene";
import AboutScene from "../scenes/AboutScene";
import { useSelector } from "react-redux";
import BgPillars from "./bgPillars";
import { useSpring, animated as a } from "react-spring/three";
import {
  setAllCanAnimate,
  getCanAnimate,
  pushNewPage,
  getCurrentPageIndex
} from "./api";

let isFirstCall = true;

const BasicScene = props => {
  const glitch = useSelector(state => state.sceneReducer.glitch);

  const pages = useSelector(state => state.sceneReducer.pages);

  //<div className="gradiant"></div>

  //disable animations if not page 0
  /*if (props.currentPageIndex !== 0 && isFirstCall) {
    //setAllCanAnimate(false);
  }*/

  isFirstCall = false;

  const [moveScene, setMoveScene] = useSpring(() => ({
    position: [0, 0, 0],
    config: getCanAnimate(0)
      ? { mass: 5, tension: 350, friction: 100 }
      : { duration: 1 },
    onRest: () => {
      //done animation so set new scene
      //pushNewPage(currentPageIndex);
    }
  }));

  useEffect(() => {
    console.log("tester");
    //add custom listener for moving the camera
    window.addEventListener("moveScene", moveSceneFunc);

    return () => {
      window.removeEventListener("moveScene", moveSceneFunc);
    };
    //moveSceneFunc();
  });

  const moveSceneFunc = () => {
    setMoveScene({
      position: pages[1].camPos
    });
  };

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
        <Suspense fallback={null}>
          <a.group name="completeScene" {...moveScene}>
            <HomeScene />
            <ProjectsScene />
            <AboutScene />
            <BgPillars />
          </a.group>
        </Suspense>
        <Effects glitch={false} />
      </Canvas>
    </div>
  );
};
/**
 *
 *
 */
export default BasicScene;
