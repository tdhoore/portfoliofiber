import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import projects from "../../meshes/projects.gltf";
import {
  defaultMat,
  blueColor,
  pinkColor,
  glowMat,
  glowMatPink
} from "../../material/materials";

export default function Model(props) {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, projects);

  const mainBlimp = useRef();
  const drone1 = useRef();
  const drone2 = useRef();

  const actions = useRef();
  const [mixer] = useState(() => new THREE.AnimationMixer());

  useFrame((state, delta) => mixer.update(delta));

  useEffect(() => {
    actions.current = {
      blimp: mixer.clipAction(gltf.animations[0], mainBlimp.current),
      drone1: mixer.clipAction(gltf.animations[1], drone1.current),
      drone2: mixer.clipAction(gltf.animations[2], drone2.current)
    };

    //stop itteration
    Object.keys(actions.current).forEach(key => {
      actions.current[key].clampWhenFinished = true;
      actions.current[key].setLoop(THREE.LoopOnce);
    });
    console.log();
    window.addEventListener("keydown", () => {
      actions.current.blimp.play();
      actions.current.drone1.play();
      actions.current.drone2.play();
    });
    return () => gltf.animations.forEach(clip => mixer.uncacheClip(clip));
  }, []);

  return (
    <group ref={group} {...props}>
      <scene name="Scene">
        <group
          name="blimp001"
          position={[
            -4.017293453216553,
            1.1164196729660034,
            -13.345661163330078
          ]}
          rotation={[
            -3.1415924788580534,
            1.1563167555870852,
            3.0213946255481705
          ]}
          ref={mainBlimp}
        >
          <mesh name="Cube.284_0">
            <bufferGeometry attach="geometry" {...gltf.__$[2].geometry} />
            <meshStandardMaterial
              attach="material"
              {...defaultMat}
              name="default"
            />
          </mesh>
          <mesh name="Cube.284_1">
            <bufferGeometry attach="geometry" {...gltf.__$[3].geometry} />
            <meshStandardMaterial
              attach="material"
              {...glowMat}
              name="Material.004"
            />
          </mesh>
          <mesh name="Cube.284_2">
            <bufferGeometry attach="geometry" {...gltf.__$[4].geometry} />
            <meshStandardMaterial
              attach="material"
              {...glowMat}
              name="Material.002"
            />
          </mesh>
        </group>
        <group name="drones" position={[-5, 3, 3]}>
          <group
            name="drone001"
            position={[
              -2.7948405742645264,
              3.426842451095581,
              -14.199584007263184
            ]}
            rotation={[
              0.4571308387324314,
              0.427062637755932,
              0.34368584579921996
            ]}
            ref={drone2}
          >
            <mesh name="Cube.285_0">
              <bufferGeometry attach="geometry" {...gltf.__$[6].geometry} />
              <meshStandardMaterial
                attach="material"
                {...defaultMat}
                name="default"
              />
            </mesh>
            <mesh name="Cube.285_1">
              <bufferGeometry attach="geometry" {...gltf.__$[7].geometry} />
              <meshStandardMaterial
                attach="material"
                {...glowMat}
                name="Material.002"
              />
            </mesh>
            <mesh name="Cube.285_2">
              <bufferGeometry attach="geometry" {...gltf.__$[8].geometry} />
              <meshStandardMaterial
                attach="material"
                {...glowMat}
                name="Material.002"
              />
            </mesh>
            <object3D
              name="Spot000"
              position={[0, -0.11666250228881836, 0.33537769317626953]}
              rotation={[-1.5707964611537464, 0, 0]}
              scale={[
                0.22866827249526978,
                0.22866827249526978,
                0.22866825759410858
              ]}
            >
              <spotLight
                name="Spot000_Orientation"
                rotation={[-1.5707962925663537, 0, 0]}
                color={blueColor}
                intensity={0.3}
                penumbra={1}
              >
                <object3D position={[0, 0, -1]} />
              </spotLight>
            </object3D>
          </group>
          <group
            name="drone004"
            position={[
              -6.851423740386963,
              3.2837002277374268,
              -14.2283935546875
            ]}
            rotation={[
              -0.25085423070178764,
              0.45663919000556036,
              0.548123116812224
            ]}
            ref={drone1}
          >
            <mesh name="Cube.286_0">
              <bufferGeometry attach="geometry" {...gltf.__$[13].geometry} />
              <meshStandardMaterial
                attach="material"
                {...defaultMat}
                name="default"
              />
            </mesh>
            <mesh name="Cube.286_1">
              <bufferGeometry attach="geometry" {...gltf.__$[14].geometry} />
              <meshStandardMaterial
                attach="material"
                {...glowMatPink}
                name="Material.014"
              />
            </mesh>
            <mesh name="Cube.286_2">
              <bufferGeometry attach="geometry" {...gltf.__$[15].geometry} />
              <meshStandardMaterial
                attach="material"
                {...glowMatPink}
                name="Material.014"
              />
            </mesh>
            <object3D
              name="Spot003"
              position={[0, -0.04574108123779297, 0.3396463394165039]}
              rotation={[-1.570796461153735, 0, 0]}
              scale={[
                0.22866827249526978,
                0.22866825759410858,
                0.22866827249526978
              ]}
            >
              <spotLight
                name="Spot003_Orientation"
                rotation={[-1.5707962925663537, 0, 0]}
                color={pinkColor}
                intensity={0.3}
                penumbra={1}
              >
                <object3D position={[0, 0, -1]} />
              </spotLight>
            </object3D>
          </group>
        </group>
      </scene>
    </group>
  );
}
