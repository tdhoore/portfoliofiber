import * as THREE from "three";
import React, { useRef, useEffect, useMemo } from "react";
import { extend, useThree, useFrame } from "react-three-fiber";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader";
import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass";

extend({
  EffectComposer,
  ShaderPass,
  RenderPass,
  UnrealBloomPass,
  FilmPass,
  GlitchPass
});

export default function Effects(props) {
  const composer = useRef();
  const { scene, gl, size, camera } = useThree();

  useEffect(() => {
    //set size for composer
    composer.current.setSize(size.width, size.height);
  }, [size]);

  useFrame(() => {
    //console.log(scene);
    composer.current.render();
  }, 2);

  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" scene={scene} camera={camera} />
      <shaderPass
        attachArray="passes"
        args={[FXAAShader]}
        uniforms-resolution-value={[1 / size.width, 1 / size.height]}
        renderToScreen
      />
      <unrealBloomPass attachArray="passes" args={[undefined, 1.5, 0.4, 0.2]} />
      <filmPass attachArray="passes" args={[0.05, 0.5, 1500, false]} />
      {props.glitch ? <glitchPass attachArray="passes" renderToScreen /> : null}
    </effectComposer>
  );
}
/*<unrealBloomPass attachArray="passes" args={[undefined, 1.5, 0.4, 0.2]} />*/
