import React, { useRef, useEffect } from "react";
import { useLoader } from "react-three-fiber";
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
  const gltf = useLoader(GLTFLoader, work);

  const [pos, setPos] = useSpring(() => ({
    position: [0, 0, 0],
    config: { mass: 5, tension: 350, friction: 100 }
  }));

  const [signAnim, setSignAnim] = useSpring(() => ({
    scale: [1, 1, 1],
    config: { mass: 5, tension: 350, friction: 100 }
  }));

  const updatePosition = () => {
    if (window.innerHeight - window.innerWidth > 0) {
      //move the position
      setPos({ position: [0.5, 0.4, 0] });
      setSignAnim({
        scale: [1, 0.6, 1]
      });
    } else {
      if (pos !== 0) {
        setPos({ position: [0, 0, 0] });
        setSignAnim({
          scale: [1, 1, 1]
        });
      }
    }
  };

  const resizeWork = e => {
    updatePosition();
  };

  useEffect(() => {
    updatePosition();

    window.addEventListener("resize", resizeWork);

    return () => {
      //remove listeners
      window.removeEventListener("resize", resizeWork);
    };
  });

  //0.5
  return (
    <group ref={group} {...props} position={[0, 0.08, -46.6]}>
      <a.group {...pos}>
        <object3D
          name="Point047"
          position={[
            -0.5345349311828613,
            2.091779947280884,
            -0.9273430705070496
          ]}
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
          position={[
            0.8144582509994507,
            2.2368969917297363,
            -1.2322880029678345
          ]}
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
          position={[
            -0.6795758605003357,
            1.378262996673584,
            -0.6296080350875854
          ]}
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
          position={[
            -0.6795758605003357,
            3.116321086883545,
            -0.6296080350875854
          ]}
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
          name="buildingLeft"
          position={[
            -2.203651189804077,
            -0.2884582281112671,
            -1.561077356338501
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[13].geometry} />
          <meshStandardMaterial
            attach="material"
            {...defaultMat}
            name="default"
          />
        </mesh>
        <a.group
          name="billboard"
          {...signAnim}
          position={[
            -0.5345349311828613,
            2.091779947280884,
            -0.9867019653320312
          ]}
        >
          <mesh name="CUPlane.000_0">
            <bufferGeometry attach="geometry" {...gltf.__$[15].geometry} />
            <meshStandardMaterial
              attach="material"
              {...defaultMat}
              name="default"
            />
          </mesh>
          <mesh name="CUPlane.000_1">
            <bufferGeometry attach="geometry" {...gltf.__$[16].geometry} />
            <meshStandardMaterial
              attach="material"
              {...glowMat}
              name="Material.002"
            />
          </mesh>
        </a.group>
        <group
          name="beam"
          position={[
            0.004745424725115299,
            2.9279325008392334,
            -1.6825470924377441
          ]}
          rotation={[
            0.08712252931590246,
            -0.0395545822234481,
            -0.0732743195110645
          ]}
        >
          <mesh name="Cube.342_0">
            <bufferGeometry attach="geometry" {...gltf.__$[18].geometry} />
            <meshStandardMaterial
              attach="material"
              {...defaultMat}
              name="default"
            />
          </mesh>
          <mesh name="Cube.342_1">
            <bufferGeometry attach="geometry" {...gltf.__$[19].geometry} />
            <meshStandardMaterial
              attach="material"
              {...glowMat}
              name="Material.002"
            />
          </mesh>
        </group>
        <group
          name="panel_2001"
          position={[
            -1.0471382141113281,
            1.1778647899627686,
            -0.07230318337678909
          ]}
        >
          <mesh name="Plane.033_0">
            <bufferGeometry attach="geometry" {...gltf.__$[21].geometry} />
            <meshStandardMaterial
              attach="material"
              {...defaultMat}
              name="default"
            />
          </mesh>
          <mesh name="Plane.033_1">
            <bufferGeometry attach="geometry" {...gltf.__$[22].geometry} />
            <meshStandardMaterial
              attach="material"
              {...glowMat}
              name="Material.002"
            />
          </mesh>
        </group>
        <group
          name="panel_2002"
          position={[
            -1.202480673789978,
            1.0432260036468506,
            -1.6716234683990479
          ]}
        >
          <mesh name="Plane.037_0">
            <bufferGeometry attach="geometry" {...gltf.__$[24].geometry} />
            <meshStandardMaterial
              attach="material"
              {...defaultMat}
              name="default"
            />
          </mesh>
          <mesh name="Plane.037_1">
            <bufferGeometry attach="geometry" {...gltf.__$[25].geometry} />
            <meshStandardMaterial
              attach="material"
              {...glowMat}
              name="Material.002"
            />
          </mesh>
        </group>
        <group
          name="panel_2"
          position={[
            -1.043744444847107,
            2.459474802017212,
            -0.07253208756446838
          ]}
        >
          <mesh name="Plane.026_0">
            <bufferGeometry attach="geometry" {...gltf.__$[27].geometry} />
            <meshStandardMaterial
              attach="material"
              {...defaultMat}
              name="default"
            />
          </mesh>
          <mesh name="Plane.026_1">
            <bufferGeometry attach="geometry" {...gltf.__$[28].geometry} />
            <meshStandardMaterial
              attach="material"
              {...glowMat}
              name="Material.002"
            />
          </mesh>
        </group>

        <group
          name="panel_2003"
          position={[
            -0.948477566242218,
            1.1778647899627686,
            0.8123222589492798
          ]}
        >
          <mesh name="Plane.053_0">
            <bufferGeometry attach="geometry" {...gltf.__$[33].geometry} />
            <meshStandardMaterial
              attach="material"
              {...defaultMat}
              name="default"
            />
          </mesh>
          <mesh name="Plane.053_1">
            <bufferGeometry attach="geometry" {...gltf.__$[34].geometry} />
            <meshStandardMaterial
              attach="material"
              {...glowMat}
              name="Material.002"
            />
          </mesh>
        </group>
        <group
          name="panel_2004"
          position={[
            -0.9429110288619995,
            2.459474802017212,
            0.8488801121711731
          ]}
        >
          <mesh name="Plane.054_0">
            <bufferGeometry attach="geometry" {...gltf.__$[36].geometry} />
            <meshStandardMaterial
              attach="material"
              {...defaultMat}
              name="default"
            />
          </mesh>
          <mesh name="Plane.054_1">
            <bufferGeometry attach="geometry" {...gltf.__$[37].geometry} />
            <meshStandardMaterial
              attach="material"
              {...glowMat}
              name="Material.002"
            />
          </mesh>
        </group>
        <group
          name="panel_2005"
          position={[
            -0.9560134410858154,
            4.691057205200195,
            0.7989181280136108
          ]}
        >
          <mesh name="Plane.057_0">
            <bufferGeometry attach="geometry" {...gltf.__$[39].geometry} />
            <meshStandardMaterial
              attach="material"
              {...defaultMat}
              name="default"
            />
          </mesh>
          <mesh name="Plane.057_1">
            <bufferGeometry attach="geometry" {...gltf.__$[40].geometry} />
            <meshStandardMaterial
              attach="material"
              {...glowMat}
              name="Material.002"
            />
          </mesh>
        </group>
        <group
          name="panel_2006"
          position={[
            -0.8353556394577026,
            1.1778647899627686,
            1.9124445915222168
          ]}
        >
          <mesh name="Plane.058_0">
            <bufferGeometry attach="geometry" {...gltf.__$[42].geometry} />
            <meshStandardMaterial
              attach="material"
              {...defaultMat}
              name="default"
            />
          </mesh>
          <mesh name="Plane.058_1">
            <bufferGeometry attach="geometry" {...gltf.__$[43].geometry} />
            <meshStandardMaterial
              attach="material"
              {...glowMat}
              name="Material.002"
            />
          </mesh>
        </group>
        <group
          name="panel_2007"
          position={[-0.83458012342453, 2.459474802017212, 1.9122157096862793]}
        >
          <mesh name="Plane.059_0">
            <bufferGeometry attach="geometry" {...gltf.__$[45].geometry} />
            <meshStandardMaterial
              attach="material"
              {...defaultMat}
              name="default"
            />
          </mesh>
          <mesh name="Plane.059_1">
            <bufferGeometry attach="geometry" {...gltf.__$[46].geometry} />
            <meshStandardMaterial
              attach="material"
              {...glowMat}
              name="Material.002"
            />
          </mesh>
        </group>
        <group
          name="panel_2008"
          position={[
            -1.4078260660171509,
            4.691057205200195,
            -3.6807498931884766
          ]}
        >
          <mesh name="Plane.060_0">
            <bufferGeometry attach="geometry" {...gltf.__$[48].geometry} />
            <meshStandardMaterial
              attach="material"
              {...defaultMat}
              name="default"
            />
          </mesh>
          <mesh name="Plane.060_1">
            <bufferGeometry attach="geometry" {...gltf.__$[49].geometry} />
            <meshStandardMaterial
              attach="material"
              {...glowMat}
              name="Material.002"
            />
          </mesh>
        </group>
        <group
          name="panel_2009"
          position={[
            -1.5442640781402588,
            0.7119612693786621,
            -5.066746711730957
          ]}
        >
          <mesh name="Plane.061_0">
            <bufferGeometry attach="geometry" {...gltf.__$[51].geometry} />
            <meshStandardMaterial
              attach="material"
              {...defaultMat}
              name="default"
            />
          </mesh>
          <mesh name="Plane.061_1">
            <bufferGeometry attach="geometry" {...gltf.__$[52].geometry} />
            <meshStandardMaterial
              attach="material"
              {...glowMat}
              name="Material.002"
            />
          </mesh>
        </group>
        <group
          name="indicator"
          position={[8.53742504119873, 0.5550904273986816, 7.1993021965026855]}
          scale={[
            0.09969276189804077,
            0.04280323162674904,
            0.008188977837562561
          ]}
        >
          <mesh name="Cube.343_0">
            <bufferGeometry attach="geometry" {...gltf.__$[54].geometry} />
            <meshStandardMaterial
              attach="material"
              {...defaultMat}
              name="default"
            />
          </mesh>
          <mesh name="Cube.343_1">
            <bufferGeometry attach="geometry" {...gltf.__$[55].geometry} />
            <meshStandardMaterial
              attach="material"
              {...glowMat}
              name="Material.002"
            />
          </mesh>
        </group>
        <group
          name="panel_2010"
          position={[
            -1.1305395364761353,
            3.0493624210357666,
            -0.9248918294906616
          ]}
          rotation={[
            -3.1415920736228036,
            -0.32621209261202083,
            9.544400848262019e-8
          ]}
        >
          <mesh name="Plane.015_0">
            <bufferGeometry attach="geometry" {...gltf.__$[57].geometry} />
            <meshStandardMaterial
              attach="material"
              {...defaultMat}
              name="default"
            />
          </mesh>
          <mesh name="Plane.015_1">
            <bufferGeometry attach="geometry" {...gltf.__$[58].geometry} />
            <meshStandardMaterial
              attach="material"
              {...glowMat}
              name="Material.002"
            />
          </mesh>
        </group>
        <group
          name="panel_2011"
          position={[
            -1.1321378946304321,
            1.1180754899978638,
            -0.924560010433197
          ]}
          rotation={[
            -3.141591839876496,
            -0.2318587760310871,
            9.47581646380245e-8
          ]}
        >
          <mesh name="Plane.017_0">
            <bufferGeometry attach="geometry" {...gltf.__$[60].geometry} />
            <meshStandardMaterial
              attach="material"
              {...defaultMat}
              name="default"
            />
          </mesh>
          <mesh name="Plane.017_1">
            <bufferGeometry attach="geometry" {...gltf.__$[61].geometry} />
            <meshStandardMaterial
              attach="material"
              {...glowMat}
              name="Material.002"
            />
          </mesh>
        </group>
        <group
          name="panel_1002"
          position={[
            -1.3418989181518555,
            2.5051026344299316,
            -2.5411548614501953
          ]}
        >
          <mesh name="Plane.050_0">
            <bufferGeometry attach="geometry" {...gltf.__$[63].geometry} />
            <meshStandardMaterial
              attach="material"
              {...defaultMat}
              name="Metal.001"
            />
          </mesh>
          <mesh name="Plane.050_1">
            <bufferGeometry attach="geometry" {...gltf.__$[64].geometry} />
            <meshStandardMaterial
              attach="material"
              {...glowMat}
              name="Material.002"
            />
          </mesh>
        </group>
        <group
          name="panel_1003"
          position={[
            -1.3418989181518555,
            1.0358986854553223,
            -2.5411548614501953
          ]}
        >
          <mesh name="Plane.052_0">
            <bufferGeometry attach="geometry" {...gltf.__$[66].geometry} />
            <meshStandardMaterial
              attach="material"
              {...defaultMat}
              name="Metal.001"
            />
          </mesh>
          <mesh name="Plane.052_1">
            <bufferGeometry attach="geometry" {...gltf.__$[67].geometry} />
            <meshStandardMaterial
              attach="material"
              {...glowMat}
              name="Material.002"
            />
          </mesh>
        </group>
        <mesh
          name="buildingRight"
          position={[
            4.835720062255859,
            -0.2884582281112671,
            -1.569674015045166
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[11].geometry} />
          <meshStandardMaterial attach="material" {...defaultMat} />
        </mesh>
      </a.group>
      <group
        name="panel_3"
        position={[3.926776647567749, 1.1948760747909546, -1.0661739110946655]}
      >
        <mesh name="Plane.021_0">
          <bufferGeometry attach="geometry" {...gltf.__$[30].geometry} />
          <meshStandardMaterial
            attach="material"
            {...defaultMat}
            name="default"
          />
        </mesh>
        <mesh name="Plane.021_1">
          <bufferGeometry attach="geometry" {...gltf.__$[31].geometry} />
          <meshStandardMaterial
            attach="material"
            {...glowMat}
            name="Material.002"
          />
        </mesh>
      </group>
    </group>
  );
}
