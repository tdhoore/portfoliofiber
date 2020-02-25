import React, { useRef } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import cube from "../../meshes/cube.glb";
import { defaultMat, darkMat } from "../../material/materials";

export default function CubeScene(props) {
  const group = useRef();
  const { nodes } = useLoader(GLTFLoader, cube);

  return (
    <group ref={group} {...props} dispose={null}>
      <scene name="Scene">
        <mesh
          material={defaultMat}
          geometry={nodes.Cube.geometry}
          name="Cube"
        />
        <mesh material={darkMat} geometry={nodes.band.geometry} name="band" />
      </scene>
    </group>
  );
}
