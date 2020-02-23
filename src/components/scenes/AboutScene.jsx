import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import about from "../../meshes/about.glb";

export default function AboutScene(props) {
  const group = useRef();
  const { nodes, materials, animations } = useLoader(GLTFLoader, about);

  return (
    <group ref={group} {...props} dispose={null}>
      <scene name="Scene">
        <group name="Point001" position={[-3, 2.21, -3]} />
        <mesh
          material={materials["default"]}
          geometry={nodes.Cube005.geometry}
          name="Cube005"
          position={[-0.04, 2.47, -0.17]}
          scale={[0.44, 0.75, 0.34]}
        />
        <mesh
          material={materials["light glow"]}
          geometry={nodes.effect.geometry}
          name="effect"
          position={[-0.04, 2.87, -0.03]}
          scale={[1.44, 0.36, 1.44]}
        />
        <group name="arcade" position={[0.14, 1.72, -0.85]}>
          <mesh
            material={materials["default"]}
            geometry={nodes["Cube.021_0"].geometry}
            name="Cube.021_0"
          />
          <mesh
            material={materials["light glow"]}
            geometry={nodes["Cube.021_1"].geometry}
            name="Cube.021_1"
          />
          <mesh
            material={materials["light glow pink"]}
            geometry={nodes.downButton.geometry}
            name="downButton"
            position={[0, 0.76, 0.47]}
          />
          <mesh
            material={materials["light glow pink"]}
            geometry={nodes.leftButton.geometry}
            name="leftButton"
            position={[-0.05, 0.78, 0.43]}
          />
          <mesh
            material={materials["light glow pink"]}
            geometry={nodes.rightButton.geometry}
            name="rightButton"
            position={[0.05, 0.78, 0.43]}
          />
          <mesh
            material={materials["light glow pink"]}
            geometry={nodes.upButton.geometry}
            name="upButton"
            position={[0, 0.81, 0.39]}
          />
        </group>
      </scene>
    </group>
  );
}
