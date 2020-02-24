import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import about from "../../meshes/about.glb";
import { defaultMat, glowMat } from "../../material/materials";

export default function AboutScene(props) {
  const group = useRef();
  const { nodes, materials, animations } = useLoader(GLTFLoader, about);

  return (
    <group ref={group} {...props} dispose={null}>
      <scene name="Scene">
        <group name="arcade" position={[0.14, 1.72, -0.85]} castShadow={true}>
          <mesh
            material={defaultMat}
            geometry={nodes["Cube.021_0"].geometry}
            name="Cube.021_0"
          />
          <mesh
            material={glowMat}
            geometry={nodes["Cube.021_1"].geometry}
            name="Cube.021_1"
          />
        </group>
      </scene>
    </group>
  );
}
