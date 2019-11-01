import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
  
export default function Model(props) {
  const group = useRef()
  const gltf = useLoader(GLTFLoader, '/tester.gltf', loader => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/draco-gltf/')
    loader.setDRACOLoader(dracoLoader)
  })

  return (
    <group ref={group} {...props}>
      <scene name="Scene" >
        <object3D name="NurbsPath" position={[-1.199108362197876, 4.046655654907227, -3.459193468093872,]} rotation={[0, 1.5705346837480791, 0,]} />
        <object3D name="NurbsPath001" position={[-0.8550949096679688, 4.298412322998047, -3.459193468093872,]} rotation={[0, 1.5705346837480791, 0,]} />
        <object3D name="NurbsPath002" position={[-1.0101571083068848, 4.200041770935059, -3.459193468093872,]} rotation={[0, 1.5705346837480791, 0,]} />
        <object3D name="Point" position={[-0.40426772832870483, 3.1798484325408936, -1.6029512882232666,]} >
          <pointLight name="Point_Orientation" rotation={[-1.5707962925663537, 0, 0,]} />
        </object3D>
        <object3D name="Point001" position={[0.7004144787788391, 3.1274778842926025, -10.807682991027832,]} >
          <pointLight name="Point001_Orientation" rotation={[-1.5707962925663537, 0, 0,]} />
        </object3D>
        <object3D name="Point002" position={[-0.9242984652519226, 2.735767364501953, -10.993736267089844,]} >
          <pointLight name="Point002_Orientation" rotation={[-1.5707962925663537, 0, 0,]} />
        </object3D>
        <object3D name="Point003" position={[0.7464666962623596, 1.0204486846923828, -10.993736267089844,]} >
          <pointLight name="Point003_Orientation" rotation={[-1.5707962925663537, 0, 0,]} />
        </object3D>
        <object3D name="Point004" position={[0.4490705132484436, 1.84580659866333, -10.993736267089844,]} >
          <pointLight name="Point004_Orientation" rotation={[-1.5707962925663537, 0, 0,]} />
        </object3D>
        <object3D name="Point005" position={[-0.34372472763061523, 1.7542773485183716, -4.286539077758789,]} >
          <pointLight name="Point005_Orientation" rotation={[-1.5707962925663537, 0, 0,]} />
        </object3D>
        <object3D name="Point007" position={[-1.7738419771194458, 0.7362266182899475, -4.215659141540527,]} >
          <pointLight name="Point007_Orientation" rotation={[-1.5707962925663537, 0, 0,]} />
        </object3D>
        <object3D name="Point008" position={[1.4761940240859985, 3.5556609630584717, -4.106494903564453,]} >
          <pointLight name="Point008_Orientation" rotation={[-1.5707962925663537, 0, 0,]} />
        </object3D>
        <object3D name="Sun" position={[0, 18.699426651000977, 0,]} rotation={[-3.027091653113061, 1.1868730454182195, 2.97206840832052,]} >
          <directionalLight name="Sun_Orientation" rotation={[-1.5707962925663537, 0, 0,]} >
            <object3D position={[0, 0, -1,]} />
          </directionalLight>
        </object3D>
        <mesh name="Cube" position={[0.12198472023010254, 0, -4.117544651031494,]} rotation={[0, 0, -0.8077094571302676,]} scale={[0.6751125454902649, 5.892474174499512, 0.6751125454902649,]} >
          <bufferGeometry attach="geometry" {...gltf.__$[23].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[23].material} />
        </mesh>
        <mesh name="Cube001" position={[0.12198472023010254, 4.634069919586182, -4.117544651031494,]} rotation={[0, 0, -0.8077094571302676,]} scale={[0.6751125454902649, 5.892474174499512, 0.6751125454902649,]} >
          <bufferGeometry attach="geometry" {...gltf.__$[24].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[24].material} />
        </mesh>
        <mesh name="Cube002" position={[-2.1950502395629883, 1.4149682521820068, -5.85163688659668,]} rotation={[0, 0, -2.3785059068059993,]} scale={[0.6751125454902649, 5.892474174499512, 0.6751125454902649,]} >
          <bufferGeometry attach="geometry" {...gltf.__$[25].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[25].material} />
        </mesh>
        <mesh name="Cube003" position={[2.4390196800231934, 2.317034959793091, -5.85163688659668,]} rotation={[0, 0, -2.3785059068059993,]} scale={[0.6751125454902649, 5.892474174499512, 0.6751125454902649,]} >
          <bufferGeometry attach="geometry" {...gltf.__$[26].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[26].material} />
        </mesh>
        <mesh name="Cube004" position={[-2.2779927253723145, 2.249662399291992, -3.442293167114258,]} rotation={[0, 0, -0.785398204406651,]} scale={[0.1369154453277588, 0.1369154453277588, 0.1369154453277588,]} >
          <bufferGeometry attach="geometry" {...gltf.__$[27].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[27].material} />
        </mesh>
        <mesh name="Cube005" position={[-2.2779927253723145, 2.9509825706481934, -3.442293167114258,]} rotation={[0, 0, -0.785398204406651,]} scale={[0.1369154453277588, 0.1369154453277588, 0.1369154453277588,]} >
          <bufferGeometry attach="geometry" {...gltf.__$[28].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[28].material} />
        </mesh>
        <mesh name="Cube006" position={[-3.488291025161743, 2.492227077484131, -3.442293167114258,]} rotation={[0, 0, -0.785398204406651,]} scale={[0.1369154453277588, 0.1369154453277588, 0.1369154453277588,]} >
          <bufferGeometry attach="geometry" {...gltf.__$[29].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[29].material} />
        </mesh>
        <mesh name="Cube008" position={[1.0022962093353271, 0.21520650386810303, -3.442293167114258,]} rotation={[0, 0, -0.785398204406651,]} scale={[0.1369154453277588, 0.1369154453277588, 0.1369154453277588,]} >
          <bufferGeometry attach="geometry" {...gltf.__$[30].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[30].material} />
        </mesh>
        <mesh name="Cube009" position={[1.0022962093353271, 1.0502679347991943, -3.442293167114258,]} rotation={[0, 0, -0.785398204406651,]} scale={[0.1369154453277588, 0.1369154453277588, 0.1369154453277588,]} >
          <bufferGeometry attach="geometry" {...gltf.__$[31].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[31].material} />
        </mesh>
        <mesh name="Cube014" position={[-2.5221664905548096, -0.94732666015625, -5.114889144897461,]} rotation={[0, 0, -0.785398204406651,]} scale={[0.1369154453277588, 0.1369154453277588, 0.1369154453277588,]} >
          <bufferGeometry attach="geometry" {...gltf.__$[32].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[32].material} />
        </mesh>
        <mesh name="Cube015" position={[-2.5221664905548096, -0.24600651860237122, -5.114889144897461,]} rotation={[0, 0, -0.785398204406651,]} scale={[0.1369154453277588, 0.1369154453277588, 0.1369154453277588,]} >
          <bufferGeometry attach="geometry" {...gltf.__$[33].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[33].material} />
        </mesh>
        <mesh name="Cube016" position={[-3.7324647903442383, -0.7047619819641113, -5.196023464202881,]} rotation={[0, 0, -0.785398204406651,]} scale={[0.1369154453277588, 0.1369154453277588, 0.1369154453277588,]} >
          <bufferGeometry attach="geometry" {...gltf.__$[34].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[34].material} />
        </mesh>
        <mesh name="Cube017" position={[-2.2767250537872314, 0.7509778738021851, -5.1998162269592285,]} rotation={[0, 0, -0.785398204406651,]} scale={[0.1369154304265976, 0.08582504093647003, 0.1369154453277588,]} >
          <bufferGeometry attach="geometry" {...gltf.__$[35].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[35].material} />
        </mesh>
        <mesh name="Cube018" position={[-1.314469337463379, 1.0339430570602417, -5.1998162269592285,]} rotation={[0, 0, -2.356194439672407,]} scale={[0.1369154304265976, 0.08582504093647003, 0.1369154453277588,]} >
          <bufferGeometry attach="geometry" {...gltf.__$[36].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[36].material} />
        </mesh>
        <mesh name="Cube021" position={[0.8171457052230835, 4.108170986175537, -5.1998162269592285,]} rotation={[0, 0, -2.356194439672407,]} scale={[0.1369154304265976, 0.08582504093647003, 0.1369154453277588,]} >
          <bufferGeometry attach="geometry" {...gltf.__$[37].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[37].material} />
        </mesh>
        <mesh name="Cube022" position={[1.8152928352355957, 3.1100237369537354, -5.114889144897461,]} rotation={[0, 0, -0.785398204406651,]} scale={[0.3157103657722473, 0.1369154304265976, 0.1369154453277588,]} >
          <bufferGeometry attach="geometry" {...gltf.__$[38].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[38].material} />
        </mesh>
        <mesh name="Cube023" position={[1.5952870845794678, 3.767690658569336, -5.1998162269592285,]} rotation={[0, 0, -0.785398204406651,]} scale={[0.1369154304265976, 0.08582504093647003, 0.1369154453277588,]} >
          <bufferGeometry attach="geometry" {...gltf.__$[39].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[39].material} />
        </mesh>
        <mesh name="Cube024" position={[1.2965266704559326, 4.155508995056152, -5.1998162269592285,]} rotation={[0, 0, -0.785398204406651,]} scale={[0.1369154155254364, 0.14879855513572693, 0.1369154453277588,]} >
          <bufferGeometry attach="geometry" {...gltf.__$[40].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[40].material} />
        </mesh>
        <mesh name="Cube026" position={[2.3801074028015137, 1.593017816543579, -3.442293167114258,]} rotation={[0, 0, -0.785398204406651,]} scale={[0.1369154453277588, 0.1369154453277588, 0.1369154453277588,]} >
          <bufferGeometry attach="geometry" {...gltf.__$[41].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[41].material} />
        </mesh>
        <mesh name="Cube027" position={[2.3916244506835938, 2.439596176147461, -3.442293167114258,]} rotation={[0, 0, -0.785398204406651,]} scale={[0.1369154453277588, 0.1369154453277588, 0.1369154453277588,]} >
          <bufferGeometry attach="geometry" {...gltf.__$[42].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[42].material} />
        </mesh>
        <mesh name="Cube028" position={[-3.822827100753784, 1.4061484336853027, -3.442293167114258,]} rotation={[0, 0, -0.785398204406651,]} scale={[0.1369154453277588, 0.1369154453277588, 0.1369154453277588,]} >
          <bufferGeometry attach="geometry" {...gltf.__$[43].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[43].material} />
        </mesh>
        <mesh name="Cube007" position={[0.7022244930267334, 0.656806468963623, -3.4424312114715576,]} rotation={[0, 0, -0.785398204406651,]} scale={[0.1407499760389328, 0.1407499760389328, 0.06696651875972748,]} >
          <bufferGeometry attach="geometry" {...gltf.__$[44].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[44].material} name="Material.003" />
        </mesh>
        <mesh name="Cube019" position={[0.9590370655059814, 3.3100407123565674, -5.123354434967041,]} rotation={[0, 0, -0.785398204406651,]} scale={[0.1407499760389328, 0.1407499760389328, 0.06696651875972748,]} >
          <bufferGeometry attach="geometry" {...gltf.__$[45].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[45].material} name="Material.003" />
        </mesh>
        <mesh name="Cube020" position={[0.559573769569397, 3.7095038890838623, -5.123354434967041,]} rotation={[0, 0, -0.785398204406651,]} scale={[0.1407499760389328, 0.1407499760389328, 0.06696651875972748,]} >
          <bufferGeometry attach="geometry" {...gltf.__$[46].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[46].material} name="Material.003" />
        </mesh>
        <mesh name="Cube025" position={[0.33149510622024536, 0.28607696294784546, -3.4424312114715576,]} rotation={[0, 0, -0.785398204406651,]} scale={[0.1407499760389328, 0.1407499760389328, 0.06696651875972748,]} >
          <bufferGeometry attach="geometry" {...gltf.__$[47].geometry} />
          <meshStandardMaterial attach="material" {...gltf.__$[47].material} name="Material.003" />
        </mesh>
        <group name="Cube010" position={[-0.8626315593719482, 3.1174747943878174, -3.442431688308716,]} scale={[0.029908573254942894, 0.029908573254942894, 0.013645135797560215,]} >
          <mesh name="Cube.011_0" >
            <bufferGeometry attach="geometry" {...gltf.__$[49].geometry} />
            <meshStandardMaterial attach="material" {...gltf.__$[49].material} name="Material.003" />
          </mesh>
          <mesh name="Cube.011_1" >
            <bufferGeometry attach="geometry" {...gltf.__$[50].geometry} />
            <meshStandardMaterial attach="material" {...gltf.__$[50].material} name="Material.002" />
          </mesh>
        </group>
        <group name="Cube011" position={[-2.94722056388855, 1.011934518814087, -3.442431688308716,]} scale={[0.029908573254942894, 0.029908573254942894, 0.013645135797560215,]} >
          <mesh name="Cube.012_0" >
            <bufferGeometry attach="geometry" {...gltf.__$[52].geometry} />
            <meshStandardMaterial attach="material" {...gltf.__$[52].material} name="Material.003" />
          </mesh>
          <mesh name="Cube.012_1" >
            <bufferGeometry attach="geometry" {...gltf.__$[53].geometry} />
            <meshStandardMaterial attach="material" {...gltf.__$[53].material} name="Material.002" />
          </mesh>
        </group>
        <group name="Cube012" position={[0.06348168849945068, 0.5401952862739563, -3.442431688308716,]} scale={[0.029908573254942894, 0.029908573254942894, 0.013645135797560215,]} >
          <mesh name="Cube.013_0" >
            <bufferGeometry attach="geometry" {...gltf.__$[55].geometry} />
            <meshStandardMaterial attach="material" {...gltf.__$[55].material} name="Material.003" />
          </mesh>
          <mesh name="Cube.013_1" >
            <bufferGeometry attach="geometry" {...gltf.__$[56].geometry} />
            <meshStandardMaterial attach="material" {...gltf.__$[56].material} name="Material.002" />
          </mesh>
        </group>
        <group name="Cube013" position={[1.204714059829712, 2.8918776512145996, -5.1643147468566895,]} rotation={[0, 0, -1.5707962925663566,]} scale={[0.029908573254942894, 0.029908573254942894, 0.013645135797560215,]} >
          <mesh name="Cube.017_0" >
            <bufferGeometry attach="geometry" {...gltf.__$[58].geometry} />
            <meshStandardMaterial attach="material" {...gltf.__$[58].material} name="Material.003" />
          </mesh>
          <mesh name="Cube.017_1" >
            <bufferGeometry attach="geometry" {...gltf.__$[59].geometry} />
            <meshStandardMaterial attach="material" {...gltf.__$[59].material} name="Material.002" />
          </mesh>
        </group>
      </scene>
    </group>
  )
}