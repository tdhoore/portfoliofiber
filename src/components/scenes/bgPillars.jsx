import React, { useRef, useEffect } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import bgPillars from "../../meshes/bgPillars.gltf";
import { useSpring, animated as a } from "react-spring/three";
import { getCanAnimate } from "./api";

export default function BgPillars(props) {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, bgPillars);

  const canAnimate = getCanAnimate(props.currentPageIndex);

  const [posAnim, setPosAnim] = useSpring(() => ({
    position: [0, 0, -20],
    config: { mass: 5, tension: 350, friction: 100 }
  }));

  useEffect(() => {
    if (props.currentPageIndex > 0) {
      setPosAnim({
        position: [0, 0, 0],
        config: canAnimate
          ? { mass: 5, tension: 350, friction: 100 }
          : { duration: 1 }
      });
    }
  });

  return (
    <a.group ref={group} {...props} {...posAnim}>
      <scene name="Scene">
        <mesh
          name="Cube132"
          position={[5.493315696716309, 1.6918048858642578, -21.14675521850586]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[1].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[1].material} />
        </mesh>
        <mesh
          name="Cube214"
          position={[
            0.6649949550628662,
            1.724279761314392,
            -30.869356155395508
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[2].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[2].material} />
        </mesh>
        <mesh
          name="Cube215"
          position={[
            3.5595474243164062,
            1.7133924961090088,
            -28.85198974609375
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[3].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[3].material} />
        </mesh>
        <mesh
          name="Cube217"
          position={[
            -2.0255045890808105,
            1.7133924961090088,
            -27.58847999572754
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[4].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[4].material} />
        </mesh>
        <mesh
          name="Cube218"
          position={[5.734663963317871, 1.724279761314392, -30.869356155395508]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[5].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[5].material} />
        </mesh>
        <mesh
          name="Cube219"
          position={[
            11.716309547424316,
            1.724279761314392,
            -30.869356155395508
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[6].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[6].material} />
        </mesh>
        <mesh
          name="Cube221"
          position={[14.36707592010498, 1.724279761314392, -30.869356155395508]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[7].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[7].material} />
        </mesh>
        <mesh
          name="Cube222"
          position={[
            -15.397943496704102,
            1.724279761314392,
            -30.869356155395508
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[8].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[8].material} />
        </mesh>
        <mesh
          name="Cube223"
          position={[
            -11.479089736938477,
            1.724279761314392,
            -30.869356155395508
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[9].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[9].material} />
        </mesh>
        <mesh
          name="Cube146"
          position={[-9.251904487609863, 1.691805362701416, -22.22041130065918]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[10].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[10].material} />
        </mesh>
      </scene>
    </a.group>
  );
}
