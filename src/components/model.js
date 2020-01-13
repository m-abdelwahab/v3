import * as THREE from "three"
import React, { Suspense, useRef } from "react"
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from "react-three-fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

extend({ OrbitControls })

const Controls = props => {
  const { gl, camera } = useThree()
  const ref = useRef()
  useFrame(() => ref.current.update())
  return <orbitControls ref={ref} args={[camera, gl.domElement]} {...props} />
}

function Asset({ url }) {
  const gltf = useLoader(GLTFLoader, url)
  return <primitive object={gltf.scene} />
}

const Cube = () => {
  const ref = useRef()
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))
  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" args={[3.5, 3.5, 3.5]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}
const Model = () => {
  return (
    <Canvas
      camera={{ position: [1, 1, 1] }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true
        gl.shadowMap.type = THREE.PCFSoftShadowMap
      }}
    >
      <ambientLight intensity={1.5} />
      <pointLight intensity={2} position={[10, -25, 10]} />
      <spotLight
        castShadow
        intensity={1.25}
        angle={Math.PI / 8}
        position={[25, 25, 15]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <Controls
        autoRotate
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.5}
        rotateSpeed={1}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Suspense fallback={<Cube />}>
        <Asset url="/scene.gltf" />
      </Suspense>
    </Canvas>
  )
}

export default Model
