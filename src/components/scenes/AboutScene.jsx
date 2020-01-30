import React, { useRef } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import about from "../../meshes/about.glb";
import {
  blueColor,
  pinkColor,
  defaultMat,
  glowMat
} from "../../material/materials";

export default function AboutScene(props) {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, about);
  console.log("tester");
  return (
    <group ref={group} {...props} position={[0, 0, -60]}>
      <scene name="Scene">
        <object3D
          name="Point006"
          position={[
            0.015827536582946777,
            2.6563189029693604,
            -5.042562484741211
          ]}
          rotation={[0, -0.5235987642179206, 0]}
        >
          <pointLight
            name="Point006_Orientation"
            rotation={[-1.5707962925663537, 0, 0]}
            distance={4}
            intensity={0.5}
            color={pinkColor}
          />
        </object3D>
        <object3D
          name="Point009"
          position={[
            -5.622348308563232,
            -0.14828023314476013,
            -9.017104148864746
          ]}
          rotation={[0, -0.5235987642179206, 0]}
        >
          <pointLight
            name="Point009_Orientation"
            rotation={[-1.5707962925663537, 0, 0]}
            distance={4}
            intensity={1}
            color={blueColor}
          />
        </object3D>
        <object3D
          name="Point011"
          position={[-1.4464343786239624, 7.78644323348999, -6.704122543334961]}
          rotation={[0, -0.5235987642179206, 0]}
        >
          <pointLight
            name="Point011_Orientation"
            rotation={[-1.5707962925663537, 0, 0]}
            distance={4}
            intensity={1}
            color={blueColor}
          />
        </object3D>
        <object3D
          name="Point013"
          position={[5.22135066986084, 4.462263584136963, -8.794477462768555]}
          rotation={[0, -0.5235987642179206, 0]}
        >
          <pointLight
            name="Point013_Orientation"
            rotation={[-1.5707962925663537, 0, 0]}
            distance={3}
            intensity={0.2}
            color={pinkColor}
          />
        </object3D>
        <object3D
          name="Point014"
          position={[
            2.9874367713928223,
            -0.9210082292556763,
            -7.063362121582031
          ]}
          rotation={[0, -0.5235987642179206, 0]}
        >
          <pointLight
            name="Point014_Orientation"
            rotation={[-1.5707962925663537, 0, 0]}
            distance={4}
            intensity={2}
            color={blueColor}
          />
        </object3D>
        <object3D
          name="Point015"
          position={[
            2.9874367713928223,
            1.4205254316329956,
            -7.063362121582031
          ]}
          rotation={[0, -0.5235987642179206, 0]}
        >
          <pointLight
            name="Point015_Orientation"
            rotation={[-1.5707962925663537, 0, 0]}
            distance={4}
            intensity={0.3}
            color={blueColor}
          />
        </object3D>
        <object3D
          name="Point016"
          position={[2.9874367713928223, 3.682865858078003, -7.063362121582031]}
          rotation={[0, -0.5235987642179206, 0]}
        >
          <pointLight
            name="Point016_Orientation"
            rotation={[-1.5707962925663537, 0, 0]}
            distance={0}
            intensity={0}
          />
        </object3D>
        <object3D
          name="Point010"
          position={[
            -6.104608535766602,
            4.462263584136963,
            -12.692493438720703
          ]}
          rotation={[0, -0.5235987642179206, 0]}
        >
          <pointLight
            name="Point010_Orientation"
            rotation={[-1.5707962925663537, 0, 0]}
            distance={3}
            intensity={0.2}
            color={pinkColor}
          />
        </object3D>
        <mesh
          name="Cube029"
          position={[
            -0.12154507637023926,
            -4.312347888946533,
            -8.825114250183105
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[17].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[17].material} />
        </mesh>
        <mesh
          name="Cube030"
          position={[
            -1.6384719610214233,
            0.5598119497299194,
            -7.742066383361816
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[18].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[18].material} />
        </mesh>
        <mesh
          name="Cube033"
          position={[
            -1.6384719610214233,
            -1.3678139448165894,
            -7.742066383361816
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[19].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[19].material} />
        </mesh>
        <mesh
          name="Cube034"
          position={[
            -1.6384724378585815,
            -2.0448977947235107,
            -8.283257484436035
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[20].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[20].material} />
        </mesh>
        <mesh
          name="Cube035"
          position={[
            -1.6384719610214233,
            0.2909044921398163,
            -9.064541816711426
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[21].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[21].material} />
        </mesh>
        <mesh
          name="Cube036"
          position={[
            -1.6384719610214233,
            -1.9195705652236938,
            -9.064541816711426
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[22].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[22].material} />
        </mesh>
        <mesh
          name="Cube038"
          position={[9.806339263916016, 1.691805362701416, -15.374283790588379]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[23].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[23].material} />
        </mesh>
        <mesh
          name="Cube040"
          position={[
            -1.6384719610214233,
            2.9906084537506104,
            -9.54677963256836
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[24].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[24].material} />
        </mesh>
        <mesh
          name="Cube041"
          position={[
            -1.6384724378585815,
            2.6414058208465576,
            -10.087972640991211
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[25].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[25].material} />
        </mesh>
        <mesh
          name="Cube042"
          position={[
            -1.6384719610214233,
            3.0726521015167236,
            -8.198447227478027
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[26].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[26].material} />
        </mesh>
        <mesh
          name="Cube044"
          position={[
            -1.6384719610214233,
            -3.3786399364471436,
            -7.742066383361816
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[27].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[27].material} />
        </mesh>
        <mesh
          name="Cube045"
          position={[
            -1.6384724378585815,
            -4.055724143981934,
            -8.283257484436035
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[28].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[28].material} />
        </mesh>
        <mesh
          name="Cube046"
          position={[
            -1.6384719610214233,
            -3.7328646183013916,
            -9.22630786895752
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[29].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[29].material} />
        </mesh>
        <mesh
          name="Cube048"
          position={[
            -1.6384719610214233,
            -3.7328646183013916,
            -8.811753273010254
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[30].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[30].material} />
        </mesh>
        <mesh
          name="Cube049"
          position={[
            -1.6384724378585815,
            -0.8212932348251343,
            -9.795310974121094
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[31].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[31].material} />
        </mesh>
        <mesh
          name="Cube050"
          position={[
            -1.6384719610214233,
            2.5163865089416504,
            -8.85532283782959
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[32].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[32].material} />
        </mesh>
        <mesh
          name="Cube053"
          position={[
            -2.4265687465667725,
            1.691805362701416,
            -23.676706314086914
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[33].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[33].material} />
        </mesh>
        <group
          name="Cube031"
          position={[
            -1.6889795064926147,
            2.9049291610717773,
            -7.449135780334473
          ]}
        >
          <mesh name="Cube.014_0">
            <bufferGeometry attach="geometry" {...gltf.__$[35].geometry} />
            <meshStandardMaterial
              attach="material"
              {...gltf.__$[35].material}
              name="default"
            />
          </mesh>
          <mesh name="Cube.014_1">
            <bufferGeometry attach="geometry" {...gltf.__$[36].geometry} />
            <meshStandardMaterial
              attach="material"
              {...gltf.__$[36].material}
              name="Material.002"
            />
          </mesh>
        </group>
        <group
          name="Cube032"
          position={[
            -1.6889790296554565,
            0.017738014459609985,
            -8.073224067687988
          ]}
        >
          <mesh name="Cube.015_0">
            <bufferGeometry attach="geometry" {...gltf.__$[38].geometry} />
            <meshStandardMaterial
              attach="material"
              {...gltf.__$[38].material}
              name="default"
            />
          </mesh>
          <mesh name="Cube.015_1">
            <bufferGeometry attach="geometry" {...gltf.__$[39].geometry} />
            <meshStandardMaterial
              attach="material"
              {...gltf.__$[39].material}
              name="Material.002"
            />
          </mesh>
        </group>
        <group
          name="NurbsPath004"
          position={[
            2.7087326049804688,
            5.653868198394775,
            -10.839832305908203
          ]}
        >
          <mesh name="NurbsPath.007_0">
            <bufferGeometry attach="geometry" {...gltf.__$[41].geometry} />
            <meshStandardMaterial
              attach="material"
              {...gltf.__$[41].material}
              name="default"
            />
          </mesh>
          <mesh name="NurbsPath.007_1">
            <bufferGeometry attach="geometry" {...gltf.__$[42].geometry} />
            <meshStandardMaterial
              attach="material"
              {...gltf.__$[42].material}
              name="Material.002"
            />
          </mesh>
        </group>
        <group
          name="Cube047"
          position={[
            -1.6889790296554565,
            -3.3273074626922607,
            -9.770551681518555
          ]}
        >
          <mesh name="Cube.051_0">
            <bufferGeometry attach="geometry" {...gltf.__$[44].geometry} />
            <meshStandardMaterial
              attach="material"
              {...gltf.__$[44].material}
              name="default"
            />
          </mesh>
          <mesh name="Cube.051_1">
            <bufferGeometry attach="geometry" {...gltf.__$[45].geometry} />
            <meshStandardMaterial
              attach="material"
              {...gltf.__$[45].material}
              name="Material.002"
            />
          </mesh>
        </group>
        <group
          name="NurbsPath003"
          position={[
            -3.5919904708862305,
            5.653868198394775,
            -14.737848281860352
          ]}
        >
          <mesh name="NurbsPath.000_0">
            <bufferGeometry attach="geometry" {...gltf.__$[47].geometry} />
            <meshStandardMaterial
              attach="material"
              {...gltf.__$[47].material}
              name="default"
            />
          </mesh>
          <mesh name="NurbsPath.000_1">
            <bufferGeometry attach="geometry" {...gltf.__$[48].geometry} />
            <meshStandardMaterial
              attach="material"
              {...gltf.__$[48].material}
              name="Material.002"
            />
          </mesh>
        </group>
        <group
          name="Cube043"
          position={[
            -0.12154519557952881,
            4.6710124015808105,
            -8.825114250183105
          ]}
        >
          <mesh name="Cube.043_0">
            <bufferGeometry attach="geometry" {...gltf.__$[50].geometry} />
            <meshStandardMaterial
              attach="material"
              {...gltf.__$[50].material}
              name="default"
            />
          </mesh>
          <mesh name="Cube.043_1">
            <bufferGeometry attach="geometry" {...gltf.__$[51].geometry} />
            <meshStandardMaterial
              attach="material"
              {...gltf.__$[51].material}
              name="Material"
            />
          </mesh>
        </group>
      </scene>
    </group>
  );
}
