import React, { useRef, useMemo } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import work from "../../meshes/work.glb";
import tester from "../../assets/img/tester.png";
import { TextureLoader } from "three";

export default function SignScene(props) {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, work);

  const image = useMemo(() => new TextureLoader().load(tester), []);

  //image.center = false;

  return (
    <group ref={group} {...props} position={[0, 0.08, -46.6]}>
      <mesh
        name="imageHolder"
        position={[-0.5345349311828613, 2.091779947280884, -0.9867019653320312]}
      >
        <bufferGeometry attach="geometry" {...gltf.__$[12].geometry} />
        <meshBasicMaterial
          attach="material"
          name="sign"
          map={image}
          transparent
          opacity={0.9}
        />
      </mesh>
    </group>
  );
}
