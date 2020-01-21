import React, { useEffect, useRef } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSpring, animated as a } from "react-spring/three";
import projects from "../../meshes/projects.gltf";
import { defaultMat, glowMat } from "../../material/materials";

export default function ProjectsScene(props) {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, projects);

  const armAdjust = -0.1;
  const maxWidth = 1072;
  const heightPercent = 58;

  const [armPosLeft, setArmPosLeft] = useSpring(() => ({
    position: [-1.9037938117980957, 2.091780185699463, -4.082165241241455],
    config: { duration: 1 }
  }));
  const [armPosRight, setArmPosRight] = useSpring(() => ({
    position: [1.9037938117980957, 2.091780185699463, -4.082165241241455],
    config: { duration: 1 }
  }));

  const moveArmFunc = e => {
    const currentwidth =
      window.innerWidth > maxWidth ? maxWidth : window.innerWidth;

    const currentObjectHeight = (window.innerHeight / 100) * heightPercent;

    const newValue =
      window.innerWidth > maxWidth
        ? currentwidth / currentObjectHeight
        : currentwidth / currentObjectHeight + armAdjust;

    setArmPosLeft({
      position: [-newValue, 2.091780185699463, -4.082165241241455]
    });
    setArmPosRight({
      position: [newValue, 2.091780185699463, -4.082165241241455]
    });
  };

  useEffect(() => {
    //move intial value
    moveArmFunc();

    window.addEventListener("resize", moveArmFunc);

    return () => {
      //remove listeners
      window.removeEventListener("resize", moveArmFunc);
    };
  }, [moveArmFunc]);

  return (
    <group ref={group} {...props} position={[0, 0, -46]}>
      <group position={[20, 0, -5]}>
        <mesh name="Cube.302_0">
          <boxBufferGeometry attach="geometry" args={[5, 50, 5]} />
          <meshStandardMaterial
            attach="material"
            {...defaultMat}
            name="default"
          />
        </mesh>
      </group>
      <group position={[-20, 0, -5]}>
        <mesh name="Cube.302_0">
          <boxBufferGeometry attach="geometry" args={[5, 50, 5]} />
          <meshStandardMaterial
            attach="material"
            {...defaultMat}
            name="default"
          />
        </mesh>
      </group>
      <group
        name="pillar"
        position={[-0.08510500192642212, 4.568455219268799, -4.082165241241455]}
      >
        <mesh name="Cube.302_0">
          <bufferGeometry attach="geometry" {...gltf.__$[2].geometry} />
          <meshStandardMaterial
            attach="material"
            {...defaultMat}
            name="default"
          />
        </mesh>
        <mesh name="Cube.302_1">
          <bufferGeometry attach="geometry" {...gltf.__$[3].geometry} />
          <meshStandardMaterial
            attach="material"
            {...glowMat}
            name="Material.002"
          />
        </mesh>
      </group>
      <a.group name="leftArm" {...armPosLeft}>
        <mesh name="Cube.320_0">
          <bufferGeometry attach="geometry" {...gltf.__$[5].geometry} />
          <meshStandardMaterial
            attach="material"
            {...defaultMat}
            name="default"
          />
        </mesh>
        <mesh name="Cube.320_1">
          <bufferGeometry attach="geometry" {...gltf.__$[6].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[6].material}
            {...glowMat}
            emissiveIntensity={1}
            name="Material.002"
          />
        </mesh>
      </a.group>
      <a.group name="rightArm" {...armPosRight} scale={[-1, 1, 1]}>
        <mesh name="Cube.320_0">
          <bufferGeometry attach="geometry" {...gltf.__$[5].geometry} />
          <meshStandardMaterial
            attach="material"
            {...defaultMat}
            name="default"
          />
        </mesh>
        <mesh name="Cube.320_1">
          <bufferGeometry attach="geometry" {...gltf.__$[6].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[6].material}
            {...glowMat}
            emissiveIntensity={1}
            name="Material.002"
          />
        </mesh>
      </a.group>
    </group>
  );
}
