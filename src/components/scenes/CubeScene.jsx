import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import cube from "../../meshes/cube.glb";
import { defaultMat } from "../../material/materials";

export default function CubeScene(props) {
  const group = useRef();
  const { nodes, materials, animations } = useLoader(GLTFLoader, cube);

  return (
    <group ref={group} {...props} dispose={null}>
      <scene name="Scene">
        <mesh
          material={defaultMat}
          geometry={nodes.Cube.geometry}
          name="Cube"
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
