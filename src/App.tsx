import { Canvas } from '@react-three/fiber'

function App() {

  return (
    <div id="canvas-container">
      <Canvas>
        <mesh position={[4, 4, 0]}>
          <boxGeometry args={[5, 5, 2]} />
          <meshStandardMaterial />
        </mesh>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
      </Canvas>
    </div>
  )
}

export default App
