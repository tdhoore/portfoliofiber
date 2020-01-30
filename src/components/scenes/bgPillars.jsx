import React, { useRef, useEffect } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import bgPillars from "../../meshes/bgPillars.glb";

export default function BgPillars(props) {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, bgPillars);

  useEffect(() => {});

  return (
    <group ref={group} {...props} position={[0, 0, -50]} scale={[1, 4, 1]}>
      <mesh
        name="Cube132"
        position={[5.493315696716309, 1.6918048858642578, -21.14675521850586]}
      >
        <bufferGeometry attach="geometry" {...gltf.__$[1].geometry} />
        <meshStandardMaterial attach="material" {...gltf.__$[1].material} />
      </mesh>
      <mesh
        name="Cube214"
        position={[0.6649949550628662, 1.724279761314392, -30.869356155395508]}
      >
        <bufferGeometry attach="geometry" {...gltf.__$[2].geometry} />
        <meshStandardMaterial attach="material" {...gltf.__$[2].material} />
      </mesh>
      <mesh
        name="Cube215"
        position={[3.5595474243164062, 1.7133924961090088, -28.85198974609375]}
      >
        <bufferGeometry attach="geometry" {...gltf.__$[3].geometry} />
        <meshStandardMaterial attach="material" {...gltf.__$[3].material} />
      </mesh>
      <mesh
        name="Cube217"
        position={[-2.0255045890808105, 1.7133924961090088, -27.58847999572754]}
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
        position={[11.716309547424316, 1.724279761314392, -30.869356155395508]}
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
        position={[-15.397943496704102, 1.724279761314392, -30.869356155395508]}
      >
        <bufferGeometry attach="geometry" {...gltf.__$[8].geometry} />
        <meshStandardMaterial attach="material" {...gltf.__$[8].material} />
      </mesh>
      <mesh
        name="Cube223"
        position={[-11.479089736938477, 1.724279761314392, -30.869356155395508]}
      >
        <bufferGeometry attach="geometry" {...gltf.__$[9].geometry} />
        <meshStandardMaterial attach="material" {...gltf.__$[9].material} />
      </mesh>
      <mesh
        name="Cube237"
        position={[-6.692058563232422, 1.724279761314392, -30.869356155395508]}
      >
        <bufferGeometry attach="geometry" {...gltf.__$[10].geometry} />
        <meshStandardMaterial attach="material" {...gltf.__$[10].material} />
      </mesh>
      <mesh
        name="Cube238"
        position={[-2.5067484378814697, 1.7133924961090088, -31.00921058654785]}
      >
        <bufferGeometry attach="geometry" {...gltf.__$[11].geometry} />
        <meshStandardMaterial attach="material" {...gltf.__$[11].material} />
      </mesh>
      <mesh
        name="Cube239"
        position={[-8.672856330871582, 1.7133924961090088, -27.58847999572754]}
      >
        <bufferGeometry attach="geometry" {...gltf.__$[12].geometry} />
        <meshStandardMaterial attach="material" {...gltf.__$[12].material} />
      </mesh>
      <mesh
        name="Cube240"
        position={[24.434988021850586, 1.724279761314392, -28.705270767211914]}
      >
        <bufferGeometry attach="geometry" {...gltf.__$[13].geometry} />
        <meshStandardMaterial attach="material" {...gltf.__$[13].material} />
      </mesh>
      <mesh
        name="Cube241"
        position={[27.329540252685547, 1.7133924961090088, -26.687904357910156]}
      >
        <bufferGeometry attach="geometry" {...gltf.__$[14].geometry} />
        <meshStandardMaterial attach="material" {...gltf.__$[14].material} />
      </mesh>
      <mesh
        name="Cube242"
        position={[21.744487762451172, 1.7133924961090088, -25.424394607543945]}
      >
        <bufferGeometry attach="geometry" {...gltf.__$[15].geometry} />
        <meshStandardMaterial attach="material" {...gltf.__$[15].material} />
      </mesh>
      <mesh
        name="Cube243"
        position={[17.07793426513672, 1.724279761314392, -28.705270767211914]}
      >
        <bufferGeometry attach="geometry" {...gltf.__$[16].geometry} />
        <meshStandardMaterial attach="material" {...gltf.__$[16].material} />
      </mesh>
      <mesh
        name="Cube244"
        position={[21.26324462890625, 1.7133924961090088, -28.845125198364258]}
      >
        <bufferGeometry attach="geometry" {...gltf.__$[17].geometry} />
        <meshStandardMaterial attach="material" {...gltf.__$[17].material} />
      </mesh>
      <mesh
        name="Cube245"
        position={[15.097135543823242, 1.7133924961090088, -25.424394607543945]}
      >
        <bufferGeometry attach="geometry" {...gltf.__$[18].geometry} />
        <meshStandardMaterial attach="material" {...gltf.__$[18].material} />
      </mesh>
      <mesh
        name="Cube146"
        position={[-9.251904487609863, 1.691805362701416, -22.22041130065918]}
      >
        <bufferGeometry attach="geometry" {...gltf.__$[19].geometry} />
        <meshStandardMaterial attach="material" {...gltf.__$[19].material} />
      </mesh>
      <mesh
        name="Cube246"
        position={[-32.9215202331543, 1.724279761314392, -30.869356155395508]}
      >
        <bufferGeometry attach="geometry" {...gltf.__$[20].geometry} />
        <meshStandardMaterial attach="material" {...gltf.__$[20].material} />
      </mesh>
      <mesh
        name="Cube247"
        position={[-30.270751953125, 1.724279761314392, -30.869356155395508]}
      >
        <bufferGeometry attach="geometry" {...gltf.__$[21].geometry} />
        <meshStandardMaterial attach="material" {...gltf.__$[21].material} />
      </mesh>
      <mesh
        name="Cube248"
        position={[-20.20284080505371, 1.724279761314392, -28.705270767211914]}
      >
        <bufferGeometry attach="geometry" {...gltf.__$[22].geometry} />
        <meshStandardMaterial attach="material" {...gltf.__$[22].material} />
      </mesh>
      <mesh
        name="Cube249"
        position={[-17.30828857421875, 1.7133924961090088, -26.687904357910156]}
      >
        <bufferGeometry attach="geometry" {...gltf.__$[23].geometry} />
        <meshStandardMaterial attach="material" {...gltf.__$[23].material} />
      </mesh>
      <mesh
        name="Cube250"
        position={[
          -22.893341064453125,
          1.7133924961090088,
          -25.424394607543945
        ]}
      >
        <bufferGeometry attach="geometry" {...gltf.__$[24].geometry} />
        <meshStandardMaterial attach="material" {...gltf.__$[24].material} />
      </mesh>
      <mesh
        name="Cube251"
        position={[-27.559894561767578, 1.724279761314392, -28.705270767211914]}
      >
        <bufferGeometry attach="geometry" {...gltf.__$[25].geometry} />
        <meshStandardMaterial attach="material" {...gltf.__$[25].material} />
      </mesh>
      <mesh
        name="Cube252"
        position={[
          -23.374584197998047,
          1.7133924961090088,
          -28.845125198364258
        ]}
      >
        <bufferGeometry attach="geometry" {...gltf.__$[26].geometry} />
        <meshStandardMaterial attach="material" {...gltf.__$[26].material} />
      </mesh>
      <mesh
        name="Cube253"
        position={[
          -29.540693283081055,
          1.7133924961090088,
          -25.424394607543945
        ]}
      >
        <bufferGeometry attach="geometry" {...gltf.__$[27].geometry} />
        <meshStandardMaterial attach="material" {...gltf.__$[27].material} />
      </mesh>
    </group>
  );
}
