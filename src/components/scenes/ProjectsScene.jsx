import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSpring, animated as a } from "react-spring/three";
import projects from "../../meshes/projects.glb";
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
  playGlitch
} from "./api";

export default function ProjectScene(props) {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, projects);

  //clear all animations
  clearActions();

  //set init page index
  setInitCurretPageIndex(1);

  const canAnimate = getCanAnimate("Work");

  //spring animations
  const [introAnim, setIntroAnim] = useSpring(() => ({
    position: [0, 0, 0],
    config: canAnimate
      ? { mass: 5, tension: 350, friction: 100 }
      : { duration: 1 }
  }));

  useEffect(() => {
    playIntro();

    //play glitch if needed
    if (!canAnimate) {
      playGlitch();
    }
  });

  const playIntro = () => {
    setIntroAnim({ position: [0, 0, 0] });

    //disable the animation
    setAllCanAnimate(false);
  };

  return (
    <a.group ref={group} {...props} position={[0, 0, -1]}>
      <scene name="Scene">
        <group
          name="pillar"
          position={[
            -0.08510500192642212,
            4.568455219268799,
            -4.082165241241455
          ]}
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
          name="arm"
          position={[
            -1.9037938117980957,
            2.091780185699463,
            -4.082165241241455
          ]}
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
              {...glowMat}
              name="Material.002"
            />
          </mesh>
        </group>
        <group
          name="armLeft"
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
              {...glowMat}
              name="Material.002"
            />
          </mesh>
        </group>
      </scene>
    </a.group>
  );
}
