import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import work from "../../meshes/work.glb";
import {
  blueColor,
  pinkColor,
  defaultMat,
  glowMat
} from "../../material/materials";
import { useSpring, animated as a } from "react-spring/three";

export default function WorkScene(props) {
  const group = useRef();
  const { nodes, materials, animations } = useLoader(GLTFLoader, work);
  console.log(nodes);
  /*
<group name="Point047" position={[-0.53, 2.09, -0.93]}>
          <primitive object={nodes.Point047_Orientation} />
        </group>
        <group name="Point048" position={[0.81, 2.24, -1.23]}>
          <primitive object={nodes.Point048_Orientation} />
        </group>
        <group name="Point049" position={[-0.42, 3.36, -1.18]}>
          <primitive object={nodes.Point049_Orientation} />
        </group>
        <group name="Point050" position={[-0.68, 1.38, -0.63]}>
          <primitive object={nodes.Point050_Orientation} />
        </group>
        <group name="Point051" position={[-0.68, 3.12, -0.63]}>
          <primitive object={nodes.Point051_Orientation} />
        </group>
*/
  console.log(materials["default"]);
  return (
    <group ref={group} {...props} dispose={null} position={[0, 0.08, -46.6]}>
      <mesh
        geometry={nodes.buildingRight.geometry}
        name="buildingRight"
        position={[4.84, -0.29, -1.57]}
      >
        <meshStandardMaterial attach="material" {...defaultMat} />
      </mesh>
      <mesh
        material={materials.sign}
        geometry={nodes.imageHolder.geometry}
        name="imageHolder"
        position={[-0.53, 2.09, -0.99]}
      />
      <mesh
        material={defaultMat}
        geometry={nodes.buildingLeft.geometry}
        name="buildingLeft"
        position={[-2.2, -0.29, -1.56]}
      />
      <group name="billboard" position={[-0.53, 2.09, -0.99]}>
        <mesh
          material={defaultMat}
          geometry={nodes["CUPlane.000_0"].geometry}
          name="CUPlane.000_0"
        />
        <mesh
          material={materials["Material.002"]}
          geometry={nodes["CUPlane.000_1"].geometry}
          name="CUPlane.000_1"
        >
          <meshStandardMaterial attach="material" {...glowMat} />
        </mesh>
      </group>
      <group
        name="beam"
        position={[0, 2.93, -1.68]}
        rotation={[0.09, -0.04, -0.07]}
      >
        <mesh
          material={defaultMat}
          geometry={nodes["Cube.342_0"].geometry}
          name="Cube.342_0"
        />
        <mesh
          material={materials["Material.002"]}
          geometry={nodes["Cube.342_1"].geometry}
          name="Cube.342_1"
        >
          <meshStandardMaterial attach="material" {...glowMat} />
        </mesh>
      </group>
      <group
        name="panel_2001"
        position={[-1.04, 1.68, 0.08]}
        rotation={[0, 0, 0]}
        scale={[1.87, 1.87, 1.87]}
      >
        <mesh
          material={defaultMat}
          geometry={nodes["Plane.033_0"].geometry}
          name="Plane.033_0"
        />
        <mesh
          material={materials["Material.002"]}
          geometry={nodes["Plane.033_1"].geometry}
          name="Plane.033_1"
        >
          <meshStandardMaterial attach="material" {...glowMat} />
        </mesh>
      </group>
      <group
        name="panel_2002"
        position={[-1.19, 0.69, -1.36]}
        rotation={[0, 0.01, 0]}
        scale={[1.65, 1.65, 1.65]}
      >
        <mesh
          material={defaultMat}
          geometry={nodes["Plane.037_0"].geometry}
          name="Plane.037_0"
        />
        <mesh
          material={materials["Material.002"]}
          geometry={nodes["Plane.037_1"].geometry}
          name="Plane.037_1"
        >
          <meshStandardMaterial attach="material" {...glowMat} />
        </mesh>
      </group>
      <group
        name="panel_2010"
        position={[-1.14, 3.05, -1.05]}
        rotation={[-Math.PI, -0.2, 0]}
      >
        <mesh
          material={materials["default"]}
          geometry={nodes["Plane.015_0"].geometry}
          name="Plane.015_0"
        />
        <mesh
          material={materials["Material.002"]}
          geometry={nodes["Plane.015_1"].geometry}
          name="Plane.015_1"
        >
          <meshStandardMaterial attach="material" {...glowMat} />
        </mesh>
      </group>
      <group
        name="panel_1002"
        position={[-1.34, 1.8, -2.82]}
        scale={[1.68, 1.68, 1.68]}
      >
        <mesh
          material={materials["Metal.001"]}
          geometry={nodes["Plane.050_0"].geometry}
          name="Plane.050_0"
        />
        <mesh
          material={materials["Material.002"]}
          geometry={nodes["Plane.050_1"].geometry}
          name="Plane.050_1"
        />
      </group>
    </group>
  );
}
