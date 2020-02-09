import * as THREE from "three";
import React, { useRef, useMemo, useEffect } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import work from "../../meshes/work.glb";
import tester from "../../assets/img/tester.png";
import { TextureLoader } from "three";
import { useTransition, useSpring, animated as a } from "react-spring/three";

export default function SignScene(props) {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, work);

  const image = useLoader(
    TextureLoader,
    props.currentImage ? `/assets/img/${props.currentImage.mainImage}` : tester
  );
  useMemo(() => image, [image]);

  const [pos, setPos] = useSpring(() => ({
    position: [0, 0, 0],
    config: { mass: 5, tension: 350, friction: 100 }
  }));

  const updatePosition = () => {
    if (window.innerHeight - window.innerWidth > 0) {
      //move the position
      setPos({ position: [0.5, 0.4, 0] });
    } else {
      if (pos !== 0) {
        setPos({ position: [0, 0, 0] });
      }
    }
  };

  const resizeWork = e => {
    updatePosition();
  };

  const transitions = useTransition(
    image,
    props.currentImage ? props.currentImage.id : null,
    {
      from: { opacity: 0 },
      enter: { opacity: 0.95 },
      leave: { opacity: 0 },
      config: { mass: 5, tension: 350, friction: 100 }
    }
  );

  useEffect(() => {
    //move texture
    image.wrapS = THREE.RepeatWrapping;
    //image.repeat.x = 1;

    //for half scale
    //done
    image.repeat.set(1, 0.5);
    image.offset.set(0, 0.25);

    //update the pos of the sign
    updatePosition();

    window.addEventListener("resize", resizeWork);

    return () => {
      //remove listeners
      window.removeEventListener("resize", resizeWork);
    };
  });
  //0.08
  return (
    <group ref={group} {...props} position={[0, 0.08, -46.6]}>
      <a.group {...pos}>
        {transitions.map(({ item, props, key }) => {
          return (
            <mesh
              name="imageHolder"
              position={[
                -0.5345349311828613,
                2.091779947280884,
                -0.9867019653320312
              ]}
              key={key}
              scale={[1, 0.5, 1]}
            >
              <bufferGeometry attach="geometry" {...gltf.__$[12].geometry} />
              <a.meshBasicMaterial
                attach="material"
                name="sign"
                map={image}
                transparent
                {...props}
              ></a.meshBasicMaterial>
            </mesh>
          );
        })}
      </a.group>
    </group>
  );
}
