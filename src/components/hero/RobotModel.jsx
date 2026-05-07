import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF, Html } from "@react-three/drei"
import { Suspense, useRef } from "react"

const Model = () => {

  const modelRef = useRef()

  const robot = useGLTF("/models/robotic-arm.glb")

  useFrame((state) => {

    if (modelRef.current) {

      modelRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.3

      modelRef.current.position.y =
        -2.2 + Math.sin(state.clock.elapsedTime) * 0.15
    }
  })

  return (
    <primitive
      ref={modelRef}
      object={robot.scene}
      scale={3.5}
      position={[-1.2, -2.2, 0]}
    />
  )
}

/* Loading Screen */
const Loader = () => {
  return (
    <Html center>
      <div className="text-cyan-400 text-lg font-semibold animate-pulse">
        Loading Robot...
      </div>
    </Html>
  )
}

const RobotModel = () => {
  return (
    <Canvas camera={{ position: [0, 1, 10], fov: 40 }}
    gl={{ alpha: true }} >

      {/* Lights */}
      <ambientLight intensity={2.5} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={5}
      />

      <pointLight
        position={[-5, 5, 5]}
        intensity={3}
        color="#00D9FF"
      />

      <pointLight
        position={[5, -5, 5]}
        intensity={2}
        color="#7B61FF"
      />

      {/* Suspense Loader */}
      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        autoRotate={false}
      />

    </Canvas>
  )
}

export default RobotModel