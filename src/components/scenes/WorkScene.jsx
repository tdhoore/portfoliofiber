import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import work from "../../meshes/work.glb";
import { darkMat, glowMatPink, blueColor } from "../../material/materials";

export default function WorkScene(props) {
  const group = useRef();
  const { nodes, materials } = useLoader(GLTFLoader, work);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[0, 0, -Math.PI / 2]}
    >
      <mesh
        material={darkMat}
        geometry={nodes.buttonHolderRight.geometry}
        name="buttonHolderRight"
        position={[-0.01, -0.11, -0.01]}
        scale={[0.99, 0.99, 0.99]}
      />
      <mesh
        material={darkMat}
        geometry={nodes.buttonHolderLeft.geometry}
        name="buttonHolderLeft"
        position={[-0.01, -0.11, -0.01]}
        scale={[0.99, 0.99, 0.99]}
      />
      <mesh
        material={glowMatPink}
        geometry={nodes.buttomRight.geometry}
        name="buttomRight"
        position={[-0.01, -0.11, -0.01]}
        scale={[0.99, 0.99, 0.99]}
      />
      <mesh
        material={glowMatPink}
        geometry={nodes.buttonLeft.geometry}
        name="buttonLeft"
        position={[-0.01, -0.11, -0.01]}
        scale={[0.99, 0.99, 0.99]}
      />
    </group>
  );
}
