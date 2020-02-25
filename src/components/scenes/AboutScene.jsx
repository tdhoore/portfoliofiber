import React, { useRef } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import about from "../../meshes/about.glb";
import { defaultMat, glowMat, blueColor } from "../../material/materials";

export default function AboutScene(props) {
  const group = useRef();
  const { nodes, materials, animations } = useLoader(GLTFLoader, about);

  return (
    <group ref={group} {...props} dispose={null} rotation={[0, 0, Math.PI]}>
      <group name="arcade" position={[0.14, 1.72, -0.85]} castShadow={true}>
        <pointLight
          position={[1, 1, 0]}
          distance={1.5}
          intensity={0.1}
          color={blueColor}
        />
        <pointLight
          position={[0, 1, 0.5]}
          distance={1.5}
          intensity={0.1}
          color={blueColor}
        />
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
    </group>
  );
}
