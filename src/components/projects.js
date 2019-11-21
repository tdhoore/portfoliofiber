import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import projectsMesh from "../meshes/projects.gltf";

export default function Model(props) {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, projectsMesh, loader => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco-gltf/");
    loader.setDRACOLoader(dracoLoader);
  });

  return (
    <group ref={group} {...props}>
      <scene name="Scene">
        <object3D
          name="Point037"
          position={[
            -1.0482673645019531,
            3.090208053588867,
            -10.642123222351074
          ]}
        >
          <pointLight
            name="Point037_Orientation"
            rotation={[-1.5707962925663537, 0, 0]}
            distance={0.1}
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
            distance={0.1}
            rotation={[-1.5707962925663537, 0, 0]}
            distance={0.1}
          />
        </object3D>
        <object3D
          name="Point039"
          position={[
            0.5148220062255859,
            -0.4871187210083008,
            -8.190604209899902
          ]}
        >
          <pointLight
            name="Point039_Orientation"
            rotation={[-1.5707962925663537, 0, 0]}
            distance={0.1}
          />
        </object3D>
        <object3D
          name="Point040"
          position={[
            -3.1454038619995117,
            8.220333099365234,
            -11.349945068359375
          ]}
        >
          <pointLight
            name="Point040_Orientation"
            rotation={[-1.5707962925663537, 0, 0]}
            distance={0.1}
          />
        </object3D>
        <object3D
          name="Point041"
          position={[
            -8.536579132080078,
            3.666285514831543,
            -17.229415893554688
          ]}
        >
          <pointLight
            name="Point041_Orientation"
            rotation={[-1.5707962925663537, 0, 0]}
            distance={0.1}
          />
        </object3D>
        <object3D
          name="Point042"
          position={[6.153118133544922, 4.202171325683594, -10.043900489807129]}
        >
          <pointLight
            name="Point042_Orientation"
            rotation={[-1.5707962925663537, 0, 0]}
            distance={0.1}
          />
        </object3D>
        <object3D
          name="Point043"
          position={[
            0.5148210525512695,
            -0.4871187210083008,
            -13.87799072265625
          ]}
        >
          <pointLight
            name="Point043_Orientation"
            rotation={[-1.5707962925663537, 0, 0]}
            distance={0.1}
          />
        </object3D>
        <object3D
          name="Point044"
          position={[0.5148210525512695, 1.854414939880371, -13.87799072265625]}
        >
          <pointLight
            name="Point044_Orientation"
            rotation={[-1.5707962925663537, 0, 0]}
            distance={0.1}
          />
        </object3D>
        <object3D
          name="Point045"
          position={[0.5148210525512695, 4.116756439208984, -13.87799072265625]}
        >
          <pointLight
            name="Point045_Orientation"
            rotation={[-1.5707962925663537, 0, 0]}
            distance={0.1}
          />
        </object3D>
        <mesh
          name="projects_main"
          position={[
            -3.0585124492645264,
            -3.878458023071289,
            -13.849223136901855
          ]}
          rotation={[0, 0.5235987642179206, 0]}
          scale={[1.5537887811660767, 8.983360290527344, 1.5537887811660767]}
        >
          <group
            name="Cube124"
            position={[
              -1.008782148361206,
              0.8034051656723022,
              0.885563850402832
            ]}
            rotation={[
              -2.707268937505771,
              -0.910083876680128,
              -2.0051201060900263
            ]}
            scale={[
              0.021800214424729347,
              0.0218002088367939,
              0.013859795406460762
            ]}
          >
            <mesh name="Cube.140_0">
              <bufferGeometry attach="geometry" {...gltf.__$[21].geometry} />
              <meshStandardMaterial
                attach="material"
                {...gltf.__$[21].material}
                name="Material.003"
              />
            </mesh>
            <mesh name="Cube.140_1">
              <bufferGeometry attach="geometry" {...gltf.__$[22].geometry} />
              <meshStandardMaterial
                attach="material"
                {...gltf.__$[22].material}
                name="Material.002"
              />
            </mesh>
          </group>
          <group
            name="Cube126"
            position={[
              -1.0087814331054688,
              0.4820118546485901,
              0.48390769958496094
            ]}
            rotation={[
              -2.707268972320352,
              -0.910083895727616,
              -2.0051201215877335
            ]}
            scale={[
              0.025163663551211357,
              0.02516365423798561,
              0.015998156741261482
            ]}
          >
            <mesh name="Cube.142_0">
              <bufferGeometry attach="geometry" {...gltf.__$[24].geometry} />
              <meshStandardMaterial
                attach="material"
                {...gltf.__$[24].material}
                name="Material.003"
              />
            </mesh>
            <mesh name="Cube.142_1">
              <bufferGeometry attach="geometry" {...gltf.__$[25].geometry} />
              <meshStandardMaterial
                attach="material"
                {...gltf.__$[25].material}
                name="Material.002"
              />
            </mesh>
          </group>
          <group
            name="Cube142"
            position={[
              -1.0087811946868896,
              0.061352312564849854,
              -0.6087322235107422
            ]}
            rotation={[
              -2.707268972320352,
              -0.910083895727616,
              -2.0051201215877335
            ]}
            scale={[
              0.025163663551211357,
              0.02516365423798561,
              0.015998156741261482
            ]}
          >
            <mesh name="Cube.158_0">
              <bufferGeometry attach="geometry" {...gltf.__$[27].geometry} />
              <meshStandardMaterial
                attach="material"
                {...gltf.__$[27].material}
                name="Material.003"
              />
            </mesh>
            <mesh name="Cube.158_1">
              <bufferGeometry attach="geometry" {...gltf.__$[28].geometry} />
              <meshStandardMaterial
                attach="material"
                {...gltf.__$[28].material}
                name="Material.002"
              />
            </mesh>
          </group>
          <group
            name="Cube145"
            position={[0, 1, 0]}
            scale={[
              0.8467779755592346,
              0.00950364489108324,
              0.8467779755592346
            ]}
          >
            <mesh name="Cube.161_0">
              <bufferGeometry attach="geometry" {...gltf.__$[30].geometry} />
              <meshStandardMaterial
                attach="material"
                {...gltf.__$[30].material}
                name="Material.003"
              />
            </mesh>
            <mesh name="Cube.161_1">
              <bufferGeometry attach="geometry" {...gltf.__$[31].geometry} />
              <meshStandardMaterial
                attach="material"
                {...gltf.__$[31].material}
                name="Material"
              />
            </mesh>
          </group>
          <bufferGeometry attach="geometry" {...gltf.__$[19].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[19].material} />
        </mesh>
        <mesh
          name="Cube131"
          position={[
            5.689680099487305,
            -1.8140125274658203,
            -12.714176177978516
          ]}
          rotation={[
            1.0095908371424662,
            -1.1527479965690206,
            0.8155231139992218
          ]}
          scale={[0.6218040585517883, 8.983360290527344, 0.6218040585517883]}
        >
          <group
            name="Cube143"
            position={[
              1.0346250534057617,
              0.6955026388168335,
              0.4189338684082031
            ]}
            rotation={[0.00003302016300185464, 1.5707963267948966, 0]}
            scale={[1.608223557472229, 0.11131692677736282, 1.6082240343093872]}
          >
            <mesh name="Cube.159_0">
              <bufferGeometry attach="geometry" {...gltf.__$[34].geometry} />
              <meshStandardMaterial
                attach="material"
                {...gltf.__$[34].material}
                name="Material.003"
              />
            </mesh>
            <mesh name="Cube.159_1">
              <bufferGeometry attach="geometry" {...gltf.__$[35].geometry} />
              <meshStandardMaterial
                attach="material"
                {...gltf.__$[35].material}
                emissiveIntensity={7}
                name="Material.002"
              />
            </mesh>
          </group>
          <group
            name="Cube144"
            position={[
              1.0346622467041016,
              -0.08017754554748535,
              -0.7021656036376953
            ]}
            rotation={[0.00003302016300185464, 1.5707963267948966, 0]}
            scale={[1.608223557472229, 0.11131692677736282, 1.6082240343093872]}
          >
            <mesh name="Cube.160_0">
              <bufferGeometry attach="geometry" {...gltf.__$[37].geometry} />
              <meshStandardMaterial
                attach="material"
                {...gltf.__$[37].material}
                name="Material.003"
              />
            </mesh>
            <mesh name="Cube.160_1">
              <bufferGeometry attach="geometry" {...gltf.__$[38].geometry} />
              <meshStandardMaterial
                attach="material"
                {...gltf.__$[38].material}
                name="Material.002"
              />
            </mesh>
          </group>
          <bufferGeometry attach="geometry" {...gltf.__$[32].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[32].material} />
        </mesh>
        <mesh
          name="Cube132"
          position={[5.493315696716309, 1.6918048858642578, -21.14675521850586]}
          rotation={[
            0.21368004527983903,
            0.7732131868272079,
            -0.24499605214586173
          ]}
          scale={[0.6300463080406189, 7.54980993270874, 0.643359363079071]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[39].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[39].material} />
        </mesh>
        <mesh
          name="Cube146"
          position={[-9.251904487609863, 1.691805362701416, -22.22041130065918]}
          rotation={[
            -0.3137695648193573,
            0.7867971595528004,
            0.3553814009234333
          ]}
          scale={[0.6300463080406189, 7.54980993270874, 0.643359363079071]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[40].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[40].material} />
        </mesh>
      </scene>
    </group>
  );
}
