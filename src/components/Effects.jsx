import React, { useRef, useEffect, useMemo } from "react";
import * as THREE from "three";
import { extend, useThree, useFrame } from "react-three-fiber";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader";
import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass";

extend({
  EffectComposer,
  ShaderPass,
  RenderPass,
  UnrealBloomPass,
  FilmPass
});

export default function Effects(props) {
  const composer = useRef();
  const { scene, gl, size, camera } = useThree();
  const aspect = useMemo(() => new THREE.Vector2(size.width, size.height), [
    size
  ]);

  useEffect(() => {
    //set size for composer
    composer.current.setSize(size.width, size.height);
  }, [size]);

  useFrame(() => {
    composer.current.render();
  }, 2);

  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" scene={scene} camera={camera} />
      <unrealBloomPass attachArray="passes" args={[aspect, 1.5, 0.4, 0.8]} />
      <shaderPass
        attachArray="passes"
        args={[FXAAShader]}
        uniforms-resolution-value={[1 / size.width, 1 / size.height]}
        renderToScreen
      />
    </effectComposer>
  );
}
//<filmPass attachArray="passes" args={[0.25, 0.4, 1500, false]} />
