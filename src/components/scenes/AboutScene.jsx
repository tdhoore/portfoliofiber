import React, { useRef, useEffect } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import aboutMesh from "../../meshes/about.gltf";
import {
  blueColor,
  pinkColor,
  defaultMat,
  glowMat
} from "../../material/materials";
import {
  clearActions,
  setInitCurretPageIndex,
  getCanAnimate,
  setAllCanAnimate,
  playGlitch
} from "./api";
import { useSpring, animated as a } from "react-spring/three";

export default function AboutScene(props) {
  //clearActions();

  //set init page index
  //setInitCurretPageIndex(2);

  const group = useRef();
  const gltf = useLoader(GLTFLoader, aboutMesh);

  //const canAnimate = getCanAnimate("About");

  //spring animations
  /*const [introAnim, setIntroAnim] = useSpring(() => ({
    position: [0, -10, 2],
    config: canAnimate
      ? { mass: 5, tension: 350, friction: 100 }
      : { duration: 1 },
    onRest: () => {
      //disable the animation
      setAllCanAnimate(false);
    }
  }));*/

  useEffect(() => {
    /*playIntro();

    //play glitch if needed
    if (!canAnimate) {
      playGlitch();
    }*/
  });

  const playIntro = () => {
    //setIntroAnim({ position: [0, 0, 2] });
  };

  return (
    <a.group ref={group} {...props} position={[0, -12, -43]}>
      <object3D
        name="Point037"
        position={[-1.0482673645019531, 3.090208053588867, -10.642123222351074]}
      >
        <pointLight
          name="Point037_Orientation"
          rotation={[-1.5707962925663537, 0, 0]}
          color={pinkColor}
          distance={4}
          intensity={0.2}
        />
      </object3D>
      <object3D
        name="Point038"
        position={[
          -7.918342590332031,
          0.28560924530029297,
          -11.265089988708496
        ]}
      >
        <pointLight
          name="Point038_Orientation"
          rotation={[-1.5707962925663537, 0, 0]}
          color={blueColor}
          distance={0.25}
          intensity={1}
        />
      </object3D>
      <object3D
        name="Point039"
        position={[0.5148220062255859, -0.4871187210083008, -8.190604209899902]}
      >
        <pointLight
          name="Point039_Orientation"
          rotation={[-1.5707962925663537, 0, 0]}
          color={blueColor}
          distance={7}
          intensity={0.4}
        />
      </object3D>
      <object3D
        name="Point040"
        position={[-3.1454038619995117, 8.220333099365234, -11.349945068359375]}
      >
        <pointLight
          name="Point040_Orientation"
          rotation={[-1.5707962925663537, 0, 0]}
          color={blueColor}
          distance={1.79}
          intensity={1}
        />
      </object3D>
      <object3D
        name="Point041"
        position={[-8.536579132080078, 3.666285514831543, -17.229415893554688]}
      >
        <pointLight
          name="Point041_Orientation"
          rotation={[-1.5707962925663537, 0, 0]}
          color={blueColor}
          distance={8}
          intensity={0.3}
        />
      </object3D>
      <object3D
        name="Point042"
        position={[6.153118133544922, 4.202171325683594, -10.043900489807129]}
      >
        <pointLight
          name="Point042_Orientation"
          rotation={[-1.5707962925663537, 0, 0]}
          color={pinkColor}
          distance={3}
          intensity={0.5}
        />
      </object3D>
      <object3D
        name="Point043"
        position={[0.5148210525512695, -0.4871187210083008, -13.87799072265625]}
      >
        <pointLight
          name="Point043_Orientation"
          rotation={[-1.5707962925663537, 0, 0]}
          color={pinkColor}
          distance={4.66}
          intensity={1}
        />
      </object3D>
      <object3D
        name="Point044"
        position={[0.5148210525512695, 1.854414939880371, -13.87799072265625]}
      >
        <pointLight
          name="Point044_Orientation"
          rotation={[-1.5707962925663537, 0, 0]}
          color={pinkColor}
          distance={2.66}
          intensity={1}
        />
      </object3D>
      <object3D
        name="Point045"
        position={[0.5148210525512695, 4.116756439208984, -13.87799072265625]}
      >
        <pointLight
          name="Point045_Orientation"
          rotation={[-1.5707962925663537, 0, 0]}
          color={blueColor}
          distance={2.66}
          intensity={1}
        />
      </object3D>
      <mesh
        name="projects_main"
        position={[
          -3.0585124492645264,
          -3.878458023071289,
          -13.849223136901855
        ]}
      >
        <group
          name="Cube124"
          position={[
            -0.6694486141204834,
            7.217277526855469,
            1.9753503799438477
          ]}
        >
          <mesh name="Cube.140_0">
            <bufferGeometry attach="geometry" {...gltf.__$[21].geometry} />
            <meshStandardMaterial
              attach="material"
              {...defaultMat}
              name="default"
            />
          </mesh>
          <mesh name="Cube.140_1">
            <bufferGeometry attach="geometry" {...gltf.__$[22].geometry} />
            <meshStandardMaterial
              attach="material"
              {...glowMat}
              name="Material.002"
            />
          </mesh>
        </group>
        <group
          name="Cube126"
          position={[
            -0.981492280960083,
            4.3300862312316895,
            1.4348726272583008
          ]}
        >
          <mesh name="Cube.142_0">
            <bufferGeometry attach="geometry" {...gltf.__$[24].geometry} />
            <meshStandardMaterial
              attach="material"
              {...defaultMat}
              name="default"
            />
          </mesh>
          <mesh name="Cube.142_1">
            <bufferGeometry attach="geometry" {...gltf.__$[25].geometry} />
            <meshStandardMaterial
              attach="material"
              {...glowMat}
              name="Material.002"
            />
          </mesh>
        </group>
        <group
          name="Cube142"
          position={[
            -1.8303577899932861,
            0.5511500835418701,
            -0.03540611267089844
          ]}
        >
          <mesh name="Cube.158_0">
            <bufferGeometry attach="geometry" {...gltf.__$[27].geometry} />
            <meshStandardMaterial
              attach="material"
              {...defaultMat}
              name="default"
            />
          </mesh>
          <mesh name="Cube.158_1">
            <bufferGeometry attach="geometry" {...gltf.__$[28].geometry} />
            <meshStandardMaterial
              attach="material"
              {...glowMat}
              name="Material.002"
            />
          </mesh>
        </group>
        <group name="Cube145" position={[0, 8.983360290527344, 0]}>
          <mesh name="Cube.161_0">
            <bufferGeometry attach="geometry" {...gltf.__$[30].geometry} />
            <meshStandardMaterial
              attach="material"
              {...defaultMat}
              name="default"
            />
          </mesh>
          <mesh name="Cube.161_1">
            <bufferGeometry attach="geometry" {...gltf.__$[31].geometry} />
            <meshStandardMaterial
              attach="material"
              {...defaultMat}
              name="Material"
            />
          </mesh>
        </group>
        <bufferGeometry attach="geometry" {...gltf.__$[19].geometry} />
        <meshStandardMaterial attach="material" {...defaultMat} />
      </mesh>
      <mesh
        name="Cube131"
        position={[5.689680099487305, -1.8140125274658203, -12.714176177978516]}
      >
        <group
          name="Cube143"
          position={[
            -1.9058332443237305,
            5.617553234100342,
            2.0807485580444336
          ]}
        >
          <mesh name="Cube.159_0">
            <bufferGeometry attach="geometry" {...gltf.__$[34].geometry} />
            <meshStandardMaterial
              attach="material"
              {...defaultMat}
              name="default"
            />
          </mesh>
          <mesh name="Cube.159_1">
            <bufferGeometry attach="geometry" {...gltf.__$[35].geometry} />
            <meshStandardMaterial
              attach="material"
              {...glowMat}
              name="Material.002"
            />
          </mesh>
        </group>
        <group
          name="Cube144"
          position={[
            0.7909512519836426,
            -0.6103630065917969,
            0.3537931442260742
          ]}
        >
          <mesh name="Cube.160_0">
            <bufferGeometry attach="geometry" {...gltf.__$[37].geometry} />
            <meshStandardMaterial
              attach="material"
              {...defaultMat}
              name="default"
            />
          </mesh>
          <mesh name="Cube.160_1">
            <bufferGeometry attach="geometry" {...gltf.__$[38].geometry} />
            <meshStandardMaterial
              attach="material"
              {...glowMat}
              name="Material.002"
            />
          </mesh>
        </group>
        <bufferGeometry attach="geometry" {...gltf.__$[32].geometry} />
        <meshStandardMaterial attach="material" {...defaultMat} />
      </mesh>
    </a.group>
  );
}
