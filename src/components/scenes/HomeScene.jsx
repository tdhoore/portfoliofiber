import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import homeMesh from "../../meshes/home.gltf";
import {
  blueColor,
  pinkColor,
  defaultMat,
  glowMat
} from "../../material/materials";
import {
  setActions,
  clearActions,
  getCurrentactions,
  setCanAnimate,
  getCanAnimate
} from "./api";
import { useSpring, animated as a } from "react-spring/three";

export default function HomeScene(props) {
  clearActions();
  let isOutroSet = false;

  //spring animations
  const [outroAnim, setOutroAnim] = useSpring(() => ({
    position: [0, 0, 0],
    config: { mass: 5, tension: 350, friction: 100 },
    onRest: () => {
      if (isOutroSet) {
        console.log("tester");
      }
    }
  }));

  const group = useRef();
  const gltf = useLoader(GLTFLoader, homeMesh, loader => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco-gltf/");
    loader.setDRACOLoader(dracoLoader);
  });

  const [mixer] = useState(() => new THREE.AnimationMixer());
  let actions = {};

  const setLocalActions = () => {
    actions = setActions({
      home_bottom_right_anim: mixer.clipAction(
        gltf.animations[0],
        group.current
      ),
      home_top_left_anim: mixer.clipAction(gltf.animations[1], group.current),
      home_bottom_left_anim: mixer.clipAction(
        gltf.animations[2],
        group.current
      ),
      home_top_right_anim: mixer.clipAction(gltf.animations[3], group.current)
    });

    //stop itteration
    Object.keys(actions).forEach(key => {
      actions[key].clampWhenFinished = true;
      actions[key].setLoop(THREE.LoopOnce);
    });
  };

  const endAnimation = () => {
    Object.keys(getCurrentactions()).forEach(key => {
      actions[key].timeScale = 50000;
      actions[key].stop();
      actions[key].play();
    });

    //disable the animation
    setCanAnimate("Home", false);
  };

  const playAnimation = () => {
    Object.keys(actions).forEach(key => {
      actions[key].play();
    });

    //disable the animation
    setCanAnimate("Home", false);
  };

  const outroAnimation = () => {
    isOutroSet = true;
    setOutroAnim({ position: [0, 0, 5] });
  };

  useFrame((state, delta) => mixer.update(delta));

  useEffect(() => {
    //setup current actions
    setLocalActions();

    //play init animations
    if (getCanAnimate("Home")) {
      playAnimation();
    } else {
      endAnimation();
    }

    window.addEventListener("resize", () => {
      //reset local actions
      setLocalActions();

      //set animations to end
      endAnimation();
    });

    window.addEventListener("keydown", () => {
      outroAnimation();
    });

    return () => gltf.animations.forEach(clip => mixer.uncacheClip(clip));
  }, [gltf.animations, mixer, endAnimation, playAnimation, setLocalActions]);

  return (
    <a.group ref={group} {...props} {...outroAnim}>
      <scene name="Scene">
        <object3D
          name="Point029"
          position={[
            -0.40426772832870483,
            3.1798484325408936,
            -1.6029512882232666
          ]}
        >
          <pointLight
            name="Point029_Orientation"
            rotation={[-1.5707962925663537, 0, 0]}
            color={pinkColor}
            distance={2.5}
            intensity={1}
          />
        </object3D>
        <object3D
          name="Point030"
          position={[
            0.7004144787788391,
            3.1274778842926025,
            -10.807682991027832
          ]}
        >
          <pointLight
            name="Point030_Orientation"
            rotation={[-1.5707962925663537, 0, 0]}
            color={blueColor}
            distance={5}
          />
        </object3D>
        <object3D
          name="Point031"
          position={[
            -0.9242984652519226,
            2.735767364501953,
            -10.993736267089844
          ]}
        >
          <pointLight
            name="Point031_Orientation"
            rotation={[-1.5707962925663537, 0, 0]}
            color={blueColor}
            distance={5}
          />
        </object3D>
        <object3D
          name="Point032"
          position={[
            0.7464666962623596,
            1.0204486846923828,
            -10.993736267089844
          ]}
        >
          <pointLight
            name="Point032_Orientation"
            rotation={[-1.5707962925663537, 0, 0]}
            color={blueColor}
            distance={5}
          />
        </object3D>
        <object3D
          name="Point033"
          position={[0.4490705132484436, 1.84580659866333, -10.993736267089844]}
        >
          <pointLight
            name="Point033_Orientation"
            rotation={[-1.5707962925663537, 0, 0]}
            color={blueColor}
            distance={5}
          />
        </object3D>
        <object3D
          name="Point034"
          position={[
            -0.34372472763061523,
            1.7542773485183716,
            -4.286539077758789
          ]}
        >
          <pointLight
            name="Point034_Orientation"
            rotation={[-1.5707962925663537, 0, 0]}
            color={blueColor}
            distance={2}
            intensity={0.2}
          />
        </object3D>
        <object3D
          name="Point035"
          position={[
            -1.7738419771194458,
            0.7362266182899475,
            -4.215659141540527
          ]}
        >
          <pointLight
            name="Point035_Orientation"
            rotation={[-1.5707962925663537, 0, 0]}
            color={pinkColor}
            distance={2}
            intensity={0.25}
          />
        </object3D>
        <object3D
          name="Point035 copy"
          position={[
            2.0738419771194458,
            2.7362266182899475,
            -4.215659141540527
          ]}
        >
          <pointLight
            name="Point035copy_Orientation"
            rotation={[-1.5707962925663537, 0, 0]}
            color={blueColor}
            distance={2}
            intensity={0.25}
          />
        </object3D>
        <object3D
          name="Point036"
          position={[2.1219847202301025, 0, -4.117544651031494]}
        >
          <pointLight
            name="Point036_Orientation"
            rotation={[-1.5707962925663537, 0, 0]}
            color={pinkColor}
            distance={2}
          />
        </object3D>
        <mesh
          name="home_top_left"
          position={[
            -1.8780152797698975,
            6.634069919586182,
            -4.117544651031494
          ]}
          castShadow
          receiveShadow
        >
          <group
            name="Cube119"
            position={[
              -0.9846162796020508,
              -1.5165953636169434,
              0.6751129627227783
            ]}
          >
            <mesh name="Cube.120_0">
              <bufferGeometry attach="geometry" {...gltf.__$[21].geometry} />
              <meshStandardMaterial
                attach="material"
                {...defaultMat}
                name="Material.003"
              />
            </mesh>
            <mesh name="Cube.120_1">
              <bufferGeometry attach="geometry" {...gltf.__$[22].geometry} />
              <meshStandardMaterial
                attach="material"
                {...glowMat}
                name="Material.002"
              />
            </mesh>
          </group>
          <group
            name="Cube120"
            position={[
              -3.0692055225372314,
              -3.6221351623535156,
              0.6751129627227783
            ]}
          >
            <mesh name="Cube.121_0">
              <bufferGeometry attach="geometry" {...gltf.__$[24].geometry} />
              <meshStandardMaterial
                attach="material"
                {...defaultMat}
                name="Material.003"
              />
            </mesh>
            <mesh name="Cube.121_1">
              <bufferGeometry attach="geometry" {...gltf.__$[25].geometry} />
              <meshStandardMaterial
                attach="material"
                {...glowMat}
                name="Material.002"
              />
            </mesh>
          </group>
          <bufferGeometry attach="geometry" {...gltf.__$[19].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[19].material} />
        </mesh>
        <mesh
          name="home_bottom_left"
          position={[
            -4.695050239562988,
            -1.0850317478179932,
            -5.85163688659668
          ]}
          castShadow
          receiveShadow
        >
          <bufferGeometry attach="geometry" {...gltf.__$[26].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[26].material} />
        </mesh>
        <mesh
          name="home_bottom_right"
          position={[2.1219847202301025, -2, -4.117544651031494]}
          castShadow
          receiveShadow
        >
          <group
            name="Cube121"
            position={[
              -0.058502912521362305,
              0.5401952266693115,
              0.6751129627227783
            ]}
          >
            <mesh name="Cube.122_0">
              <bufferGeometry attach="geometry" {...gltf.__$[29].geometry} />
              <meshStandardMaterial
                attach="material"
                {...defaultMat}
                name="Material.003"
              />
            </mesh>
            <mesh name="Cube.122_1">
              <bufferGeometry attach="geometry" {...gltf.__$[30].geometry} />
              <meshStandardMaterial
                attach="material"
                {...glowMat}
                name="Material.002"
              />
            </mesh>
          </group>
          <bufferGeometry attach="geometry" {...gltf.__$[27].geometry} />
          <meshStandardMaterial
            attach="material"
            {...defaultMat}
            name="Material.003"
          />
        </mesh>
        <mesh
          name="home_top_right"
          position={[4.939019680023193, 4.817034721374512, -5.85163688659668]}
          castShadow
          receiveShadow
        >
          <group
            name="Cube122"
            position={[
              -1.2343056201934814,
              0.5748424530029297,
              0.6873226165771484
            ]}
          >
            <mesh name="Cube.123_0">
              <bufferGeometry attach="geometry" {...gltf.__$[33].geometry} />
              <meshStandardMaterial
                attach="material"
                {...defaultMat}
                name="Material.003"
              />
            </mesh>
            <mesh name="Cube.123_1">
              <bufferGeometry attach="geometry" {...gltf.__$[34].geometry} />
              <meshStandardMaterial
                attach="material"
                {...glowMat}
                name="Material.002"
              />
            </mesh>
          </group>
          <bufferGeometry attach="geometry" {...gltf.__$[31].geometry} />
          <meshStandardMaterial
            attach="material"
            {...defaultMat}
            name="Material.003"
          />
        </mesh>
      </scene>
    </a.group>
  );
}
