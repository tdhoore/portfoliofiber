import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import base from "../../meshes/base.glb";
import { defaultMat, greenColor, blueColor } from "../../material/materials";

export default function BgScene(props) {
  const group = useRef();
  const { nodes, materials, animations } = useLoader(GLTFLoader, base);

  return (
    <group ref={group} {...props} dispose={null}>
      <scene name="Scene">
        <pointLight
          name="green_front_light"
          position={[1.85, 3.35, 1.85]}
          color={greenColor}
          intensity={0.3}
          distance={2.8}
        />
        <pointLight
          name="blue_back_light"
          position={[-1.85, 2.47, -1.85]}
          color={blueColor}
          intensity={0.3}
          distance={2.8}
        />
        <pointLight
          name="vignette_light"
          position={[-8, -2.59, -8]}
          color={blueColor}
          intensity={0.2}
          distance={5}
        />
        <directionalLight
          color={blueColor}
          intensity={0.01}
          position={[50, 500, -50]}
        />
        <mesh
          material={defaultMat}
          geometry={nodes.background.geometry}
          name="background"
          position={[0, -3.57, 0]}
          scale={[13.95, 13.95, 13.95]}
        />
      </scene>
    </group>
  );
}
