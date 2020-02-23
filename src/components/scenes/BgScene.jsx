import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import base from "../../meshes/base.glb";

export default function BgScene(props) {
  const group = useRef();
  const { nodes, materials, animations } = useLoader(GLTFLoader, base);

  return (
    <group ref={group} {...props} dispose={null}>
      <scene name="Scene">
        <group name="Point001" position={[-3, 2.21, -3]} />
        <group
          name="Camera"
          position={[5.24, 6.53, 5.24]}
          rotation={[1.18, 0.36, -0.71]}
          scale={[1.06, 1.06, 1.06]}
        />
        <group
          name="Sun"
          position={[0, 4.38, 0]}
          rotation={[-0.72, -0.29, -0.25]}
        />
        <group name="green_front_light" position={[1.85, 3.35, 1.85]} />
        <group name="blue_back_light" position={[-1.85, 2.47, -1.85]} />
        <group name="vignette_light" position={[-8, -2.59, -8]} />
        <mesh
          material={nodes.background.material}
          geometry={nodes.background.geometry}
          name="background"
          position={[0, -3.57, 0]}
          scale={[13.95, 13.95, 13.95]}
        />
        <mesh
          material={materials["default"]}
          geometry={nodes.Cube005.geometry}
          name="Cube005"
          position={[-0.04, 2.47, -0.17]}
          scale={[0.44, 0.75, 0.34]}
        />
        <mesh
          material={materials["default"]}
          geometry={nodes.Cube.geometry}
          name="Cube"
        />
        <mesh
          material={materials["light glow"]}
          geometry={nodes.effect.geometry}
          name="effect"
          position={[-0.04, 2.87, -0.03]}
          scale={[1.44, 0.36, 1.44]}
        />
        <mesh
          material={materials.dark}
          geometry={nodes.band.geometry}
          name="band"
        />
      </scene>
    </group>
  );
}
