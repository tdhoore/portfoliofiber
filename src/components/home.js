import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import homeMesh from "../meshes/home.gltf";

export default function Model(props) {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, homeMesh, loader => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco-gltf/");
    loader.setDRACOLoader(dracoLoader);
  });

  const actions = useRef();
  const [mixer] = useState(() => new THREE.AnimationMixer());
  useFrame((state, delta) => mixer.update(delta));
  /*useEffect(() => {
    actions.current = {
      "home_bottom_right_anim": mixer.clipAction(gltf.animations[0], group.current),
,      "home_top_left_anim": mixer.clipAction(gltf.animations[1], group.current),
,      "home_bottom_left_anim": mixer.clipAction(gltf.animations[2], group.current),
,      "home_top_right_anim": mixer.clipAction(gltf.animations[3], group.current),
,      "home_bottom_right_anim": mixer.clipAction(gltf.animations[4], group.current),
    }
    return () => gltf.animations.forEach(clip => mixer.uncacheClip(clip))
  }, [])*/

  return (
    <group ref={group} {...props}>
      <scene name="Scene">
        <object3D
          name="Camera005"
          position={[
            -0.08510543406009674,
            2.091782808303833,
            2.044254779815674
          ]}
          rotation={[1.5707962925663537, 0, 0]}
        >
          <perspectiveCamera
            name="Camera005_Orientation"
            rotation={[-1.5707962925663537, 0, 0]}
          />
        </object3D>
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
          />
        </object3D>
        <object3D
          name="Point033"
          position={[0.4490705132484436, 1.84580659866333, -10.993736267089844]}
        >
          <pointLight
            name="Point033_Orientation"
            rotation={[-1.5707962925663537, 0, 0]}
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
          />
        </object3D>
        <object3D
          name="Point036"
          position={[2.1219847202301025, -2, -4.117544651031494]}
        >
          <pointLight
            name="Point036_Orientation"
            rotation={[-1.5707962925663537, 0, 0]}
          />
        </object3D>
        <mesh
          name="home_top_left"
          position={[
            -1.8780152797698975,
            6.634069919586182,
            -4.117544651031494
          ]}
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
                {...gltf.__$[21].material}
                name="Material.003"
              />
            </mesh>
            <mesh name="Cube.120_1">
              <bufferGeometry attach="geometry" {...gltf.__$[22].geometry} />
              <meshStandardMaterial
                attach="material"
                {...gltf.__$[22].material}
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
                {...gltf.__$[24].material}
                name="Material.003"
              />
            </mesh>
            <mesh name="Cube.121_1">
              <bufferGeometry attach="geometry" {...gltf.__$[25].geometry} />
              <meshStandardMaterial
                attach="material"
                {...gltf.__$[25].material}
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
        >
          <bufferGeometry attach="geometry" {...gltf.__$[26].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[26].material} />
        </mesh>
        <mesh
          name="home_bottom_right"
          position={[2.1219847202301025, -2, -4.117544651031494]}
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
                {...gltf.__$[29].material}
                name="Material.003"
              />
            </mesh>
            <mesh name="Cube.122_1">
              <bufferGeometry attach="geometry" {...gltf.__$[30].geometry} />
              <meshStandardMaterial
                attach="material"
                {...gltf.__$[30].material}
                name="Material.002"
              />
            </mesh>
          </group>
          <bufferGeometry attach="geometry" {...gltf.__$[27].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[27].material}
            name="Material.003"
          />
        </mesh>
        <mesh
          name="home_top_right"
          position={[4.939019680023193, 4.817034721374512, -5.85163688659668]}
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
                {...gltf.__$[33].material}
                name="Material.003"
              />
            </mesh>
            <mesh name="Cube.123_1">
              <bufferGeometry attach="geometry" {...gltf.__$[34].geometry} />
              <meshStandardMaterial
                attach="material"
                {...gltf.__$[34].material}
                name="Material.002"
              />
            </mesh>
          </group>
          <bufferGeometry attach="geometry" {...gltf.__$[31].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[31].material}
            name="Material.003"
          />
        </mesh>
      </scene>
    </group>
  );
}
