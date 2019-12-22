import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import aboutMesh from "../meshes/about.gltf";

export default function Model(props) {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, aboutMesh, loader => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco-gltf/");
    loader.setDRACOLoader(dracoLoader);
  });

  const emissiveColor = "#7ACEE0";

  return (
    <group ref={group} {...props}>
      <scene name="Scene">
        <mesh
          name="Cube102"
          position={[2.179358959197998, 0.718690037727356, -7.586924076080322]}
          rotation={[0, -0.33510320164321883, 0]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[1].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[1].material} />
        </mesh>
        <mesh
          name="Cube103"
          position={[
            -8.100323677062988,
            -1.107839584350586,
            -15.85621452331543
          ]}
          rotation={[0, -0.5477427501575731, 0]}
          scale={[0.6218040585517883, 8.983360290527344, 0.6218040585517883]}
        >
          <group
            name="Cube104"
            position={[
              1.034627914428711,
              0.6955025792121887,
              0.41893482208251953
            ]}
            rotation={[0.00003273442995272845, 1.5707963267948966, 0]}
            scale={[1.608223557472229, 0.11131692677736282, 1.6082236766815186]}
          >
            <mesh name="Cube.105_0">
              <bufferGeometry attach="geometry" {...gltf.__$[4].geometry} />
              <meshStandardMaterial
                attach="material"
                {...gltf.__$[4].material}
                name="Material.007"
              />
            </mesh>
            <mesh name="Cube.105_1">
              <bufferGeometry attach="geometry" {...gltf.__$[5].geometry} />
              <meshStandardMaterial
                attach="material"
                {...gltf.__$[5].material}
                name="Material.001"
              />
            </mesh>
          </group>
          <group
            name="Cube105"
            position={[
              1.0346622467041016,
              0.024182893335819244,
              -0.7021617889404297
            ]}
            rotation={[0.00003273442995272845, 1.5707963267948966, 0]}
            scale={[1.608223557472229, 0.11131692677736282, 1.6082236766815186]}
          >
            <mesh name="Cube.106_0">
              <bufferGeometry attach="geometry" {...gltf.__$[7].geometry} />
              <meshStandardMaterial
                attach="material"
                {...gltf.__$[7].material}
                name="Material.007"
              />
            </mesh>
            <mesh name="Cube.106_1">
              <bufferGeometry attach="geometry" {...gltf.__$[8].geometry} />
              <meshStandardMaterial
                attach="material"
                {...gltf.__$[8].material}
                name="Material.001"
              />
            </mesh>
          </group>
          <bufferGeometry attach="geometry" {...gltf.__$[2].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[2].material} />
        </mesh>
        <mesh
          name="Cube106"
          position={[
            -7.720190048217773,
            1.1922881603240967,
            -20.18165397644043
          ]}
          rotation={[
            -0.030650397075790727,
            -0.6076011807731427,
            -0.27072806796232934
          ]}
          scale={[0.6218040585517883, 8.983360290527344, 0.6218040585517883]}
        >
          <group
            name="Cube107"
            position={[
              1.0346240997314453,
              0.6955026388168335,
              0.4189319610595703
            ]}
            rotation={[0.000032976188942913104, 1.5707963267948966, 0]}
            scale={[
              1.6082236766815186,
              0.11131692677736282,
              1.6082236766815186
            ]}
          >
            <mesh name="Cube.108_0">
              <bufferGeometry attach="geometry" {...gltf.__$[11].geometry} />
              <meshStandardMaterial
                attach="material"
                {...gltf.__$[11].material}
                name="Material.007"
              />
            </mesh>
            <mesh name="Cube.108_1">
              <bufferGeometry attach="geometry" {...gltf.__$[12].geometry} />
              <meshStandardMaterial
                attach="material"
                {...gltf.__$[12].material}
                name="Material.001"
              />
            </mesh>
          </group>
          <group
            name="Cube108"
            position={[
              1.034658432006836,
              0.024182915687561035,
              -0.7021636962890625
            ]}
            rotation={[0.000032976188942913104, 1.5707963267948966, 0]}
            scale={[
              1.6082236766815186,
              0.11131692677736282,
              1.6082236766815186
            ]}
          >
            <mesh name="Cube.109_0">
              <bufferGeometry attach="geometry" {...gltf.__$[14].geometry} />
              <meshStandardMaterial
                attach="material"
                {...gltf.__$[14].material}
                name="Material.007"
              />
            </mesh>
            <mesh name="Cube.109_1">
              <bufferGeometry attach="geometry" {...gltf.__$[15].geometry} />
              <meshStandardMaterial
                attach="material"
                {...gltf.__$[15].material}
                name="Material.001"
              />
            </mesh>
          </group>
          <bufferGeometry attach="geometry" {...gltf.__$[9].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[9].material} />
        </mesh>
        <mesh
          name="Plane001"
          position={[
            1.7467732429504395,
            1.9766520261764526,
            -6.493530750274658
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[16].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[16].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane002"
          position={[
            2.7359180450439453,
            2.0305209159851074,
            -6.037862777709961
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[17].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[17].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane003"
          position={[3.119081974029541, 1.7426954507827759, -5.69703483581543]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[18].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[18].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane004"
          position={[2.8328728675842285, 0.807115912437439, -5.90485954284668]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[19].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[19].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane005"
          position={[2.748783588409424, 1.305229902267456, -6.053008556365967]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[20].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[20].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane007"
          position={[
            3.2463581562042236,
            2.2812743186950684,
            -5.599728107452393
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[21].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[21].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane008"
          position={[3.309084177017212, 2.77398419380188, -5.448493480682373]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[22].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[22].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane009"
          position={[2.860344409942627, 2.77398419380188, -5.937201023101807]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[23].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[23].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane010"
          position={[2.7283377647399902, 3.23246693611145, -6.028938293457031]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[24].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[24].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane011"
          position={[0.6426358222961426, 0.93743497133255, -6.764707088470459]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[25].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[25].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane018"
          position={[0.48392200469970703, 2.132864236831665, -6.79378604888916]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[26].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[26].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane019"
          position={[0.6412491798400879, 2.651273727416992, -6.737821578979492]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[27].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[27].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane013"
          position={[
            0.6379928588867188,
            1.6232850551605225,
            -6.674668788909912
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[28].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[28].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane020"
          position={[
            0.48110198974609375,
            3.1439836025238037,
            -6.739095211029053
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[29].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[29].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane017"
          position={[0.632326602935791, 4.194314956665039, -6.65491247177124]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[30].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[30].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane021"
          position={[1.1386408805847168, 3.675905227661133, -6.572275161743164]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[31].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[31].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane022"
          position={[1.2861251831054688, 4.194314956665039, -6.493967056274414]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[32].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[32].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane023"
          position={[1.7959728240966797, 3.835905075073242, -6.425013065338135]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[33].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[33].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane025"
          position={[2.2325263023376465, 4.401196479797363, -6.188210964202881]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[34].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[34].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane026"
          position={[2.687678337097168, 3.675905227661133, -5.951959133148193]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[35].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[35].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane027"
          position={[2.241276264190674, 3.675905227661133, -6.206053256988525]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[36].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[36].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane028"
          position={[2.7987117767333984, 4.169625282287598, -5.814991474151611]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[37].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[37].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane030"
          position={[
            0.43060827255249023,
            3.675905227661133,
            -6.698890686035156
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[38].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[38].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane029"
          position={[3.0913665294647217, 3.4779651165008545, -5.5727219581604]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[39].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[39].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane032"
          position={[
            2.232065200805664,
            0.24227869510650635,
            -6.262667179107666
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[40].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[40].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane033"
          position={[
            2.067795753479004,
            -0.2761310338973999,
            -6.292657852172852
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[41].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[41].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane035"
          position={[
            1.625002384185791,
            0.08227886259555817,
            -6.554637432098389
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[42].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[42].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane036"
          position={[
            1.1356596946716309,
            -0.4830125570297241,
            -6.6394782066345215
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[43].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[43].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane037"
          position={[
            0.6320652961730957,
            0.24227875471115112,
            -6.73628044128418
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[44].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[44].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane038"
          position={[
            1.1398553848266602,
            0.24227869510650635,
            -6.658902168273926
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[45].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[45].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane039"
          position={[
            0.46003055572509766,
            -0.2514412999153137,
            -6.6976470947265625
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[46].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[46].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane040"
          position={[
            2.8661093711853027,
            0.2422785758972168,
            -5.923065185546875
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[47].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[47].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane006"
          position={[3.320322275161743, 1.0865012407302856, -5.421916961669922]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[48].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[48].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane012"
          position={[
            0.11811685562133789,
            0.4989645779132843,
            -6.762479782104492
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[49].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[49].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane014"
          position={[
            0.11811685562133789,
            1.3467334508895874,
            -6.762479782104492
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[50].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[50].material}
            emissive={emissiveColor}
            name="Material.010"
          />
        </mesh>
        <mesh
          name="Plane015"
          position={[
            1.7467732429504395,
            1.9766520261764526,
            -6.480079174041748
          ]}
          scale={[0.7491388320922852, 0.7491388320922852, 0.7491388320922852]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[51].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[51].material}
            name="Material.011"
          />
        </mesh>
      </scene>
    </group>
  );
}
