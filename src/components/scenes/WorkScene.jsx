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

*/
  console.log(materials["default"]);
  return (
    <group ref={group} {...props} dispose={null} position={[0, 0.08, -46.6]}>
      <object3D
        name="Point047"
        position={[-0.5345349311828613, 2.091779947280884, -0.9273430705070496]}
      >
        <pointLight
          name="Point047_Orientation"
          rotation={[-1.5707962925663537, 0, 0]}
          distance={1.5}
          intensity={0.2}
          color={blueColor}
        />
      </object3D>
      <object3D
        name="Point048"
        position={[0.8144582509994507, 2.2368969917297363, -1.2322880029678345]}
      >
        <pointLight
          name="Point048_Orientation"
          rotation={[-1.5707962925663537, 0, 0]}
          distance={1}
          intensity={0.3}
          color={pinkColor}
        />
      </object3D>
      <object3D
        name="Point049"
        position={[
          -0.4237495958805084,
          3.3583593368530273,
          -1.1837471723556519
        ]}
      >
        <pointLight
          name="Point049_Orientation"
          rotation={[-1.5707962925663537, 0, 0]}
          distance={1}
          intensity={0.3}
          color={pinkColor}
        />
      </object3D>
      <object3D
        name="Point050"
        position={[-0.6795758605003357, 1.378262996673584, -0.6296080350875854]}
      >
        <pointLight
          name="Point050_Orientation"
          rotation={[-1.5707962925663537, 0, 0]}
          distance={1}
          intensity={0.3}
          color={pinkColor}
        />
      </object3D>
      <object3D
        name="Point051"
        position={[-0.6795758605003357, 3.116321086883545, -0.6296080350875854]}
      >
        <pointLight
          name="Point051_Orientation"
          rotation={[-1.5707962925663537, 0, 0]}
          distance={1}
          intensity={0.3}
          color={pinkColor}
        />
      </object3D>
      <mesh
        geometry={nodes.buildingRight.geometry}
        name="buildingRight"
        position={[4.84, -0.29, -1.57]}
      >
        <meshStandardMaterial attach="material" {...defaultMat} />
      </mesh>
      <mesh
        geometry={nodes.buildingLeft.geometry}
        name="buildingLeft"
        position={[-2.2, -0.29, -1.56]}
      >
        <meshStandardMaterial attach="material" {...defaultMat} />
      </mesh>
      <group name="billboard" position={[-0.53, 2.09, -0.99]}>
        <mesh geometry={nodes["CUPlane.000_0"].geometry} name="CUPlane.000_0">
          <meshStandardMaterial attach="material" {...defaultMat} />
        </mesh>
        <mesh geometry={nodes["CUPlane.000_1"].geometry} name="CUPlane.000_1">
          <meshStandardMaterial attach="material" {...glowMat} />
        </mesh>
      </group>
      <group
        name="beam"
        position={[0, 2.93, -1.68]}
        rotation={[0.09, -0.04, -0.07]}
      >
        <mesh geometry={nodes["Cube.342_0"].geometry} name="Cube.342_0">
          <meshStandardMaterial attach="material" {...defaultMat} />
        </mesh>
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
        <mesh geometry={nodes["Plane.033_0"].geometry} name="Plane.033_0">
          <meshStandardMaterial attach="material" {...defaultMat} />
        </mesh>
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
        >
          <meshStandardMaterial attach="material" {...defaultMat} />
        </mesh>
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
        <mesh geometry={nodes["Plane.015_0"].geometry} name="Plane.015_0">
          <meshStandardMaterial attach="material" {...defaultMat} />
        </mesh>
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
        <mesh geometry={nodes["Plane.050_0"].geometry} name="Plane.050_0">
          <meshStandardMaterial attach="material" {...defaultMat} />
        </mesh>
        <mesh geometry={nodes["Plane.050_1"].geometry} name="Plane.050_1">
          <meshStandardMaterial attach="material" {...glowMat} />
        </mesh>
      </group>
    </group>
  );
}
