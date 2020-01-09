import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSpring, animated as a } from "react-spring/three";
import projects from "../../meshes/projects.gltf";
import {
  blueColor,
  pinkColor,
  defaultMat,
  glowMat
} from "../../material/materials";
import {
  clearActions,
  setInitCurretPageIndex,
  getCanAnimate,
  setAllCanAnimate,
  playGlitch,
  setCanAnimate,
  setCurretPageIndex
} from "./api";

export default function ProjectsScene(props) {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, projects);

  //clear all animations
  //clearActions();

  //set init page index
  //setInitCurretPageIndex(1);

  //const canAnimate = getCanAnimate("Work");

  //check if the outro needs to be played
  //let isOutroSet = false;

  //spring animations
  /*const [introAnim, setIntroAnim] = useSpring(() => ({
    position: [0, 0, -50],
    config: canAnimate
      ? { mass: 5, tension: 350, friction: 100 }
      : { duration: 1 },
    onRest: () => {
      if (isOutroSet) {
        setCurretPageIndex(2);
      }
    }
  }));*/

  useEffect(() => {
    //playIntro();

    //play glitch if needed
    /*if (!canAnimate) {
      //playGlitch();
    }

    window.addEventListener("playOutro", outroAnimation);*/

    return () => {
      //remove listeners
      // window.removeEventListener("playOutro", outroAnimation);
    };
  }, []);

  /* const playIntro = () => {
    setIntroAnim({ position: [0, 0, -1] });
  };

  const outroAnimation = () => {
    if (getCanAnimate("About")) {
      isOutroSet = true;

      //disable the animation
      setCanAnimate("Work", false);

      setIntroAnim({ position: [0, 4, -1] });
    } else {
      setCurretPageIndex(2);
    }
  };*/
  //[0,0,-1]
  return (
    <group ref={group} {...props} position={[0, 0, -46]}>
      <group
        name="pillar"
        position={[-0.08510500192642212, 4.568455219268799, -4.082165241241455]}
      >
        <mesh name="Cube.302_0">
          <bufferGeometry attach="geometry" {...gltf.__$[2].geometry} />
          <meshStandardMaterial
            attach="material"
            {...defaultMat}
            name="default"
          />
        </mesh>
        <mesh name="Cube.302_1">
          <bufferGeometry attach="geometry" {...gltf.__$[3].geometry} />
          <meshStandardMaterial
            attach="material"
            {...glowMat}
            name="Material.002"
          />
        </mesh>
      </group>
      <group
        name="leftArm"
        position={[-1.9037938117980957, 2.091780185699463, -4.082165241241455]}
      >
        <mesh name="Cube.320_0">
          <bufferGeometry attach="geometry" {...gltf.__$[5].geometry} />
          <meshStandardMaterial
            attach="material"
            {...defaultMat}
            name="default"
          />
        </mesh>
        <mesh name="Cube.320_1">
          <bufferGeometry attach="geometry" {...gltf.__$[6].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[6].material}
            {...glowMat}
            emissiveIntensity={1}
            name="Material.002"
          />
        </mesh>
      </group>
      <group
        name="rightArm"
        position={[1.9037938117980957, 2.091780185699463, -4.082165241241455]}
        scale={[-1, 1, 1]}
      >
        <mesh name="Cube.320_0">
          <bufferGeometry attach="geometry" {...gltf.__$[5].geometry} />
          <meshStandardMaterial
            attach="material"
            {...defaultMat}
            name="default"
          />
        </mesh>
        <mesh name="Cube.320_1">
          <bufferGeometry attach="geometry" {...gltf.__$[6].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[6].material}
            {...glowMat}
            emissiveIntensity={1}
            name="Material.002"
          />
        </mesh>
      </group>
    </group>
  );
}
