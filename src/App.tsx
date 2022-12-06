import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function App() {

  const myColors = [
    "#cc0c39",
    "#e6781e",
    "#c8cf02",
    "#f8fcc1",
    "#1693a7"
  ]

  return (
    <div id="canvas-container">
      <Canvas>
        <OrbitControls />
        <Present color1={myColors[0]} color2={myColors[1]} size={1} />
        <group position={[1, 5, 1]}>
          <Present color1={myColors[2]} color2={myColors[3]} size={0.5} />
        </group>
        <mesh position-y={-3}>
          <boxGeometry args={[1000, 0.01, 1000]} />
          <meshStandardMaterial color={myColors[3]} />

        </mesh>
        <ambientLight intensity={0.2} />
        <directionalLight color="white" position={[-2, 0, 5]} />
        <directionalLight color="grey" position={[1, 0, 5]} />
      </Canvas>
    </div>
  )
}

export default App

interface PresentProps {
  color1: string,
  color2: string,
  size: number
}

function Present(props: PresentProps) {
  return (
    <group scale={props.size}>
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[6, 0.5, 5]} />
        <meshStandardMaterial color={props.color1} />
      </mesh>
      <mesh position={[0, -0.6, 0]}>
        <boxGeometry args={[5, 5, 4]} />
        <meshStandardMaterial color={props.color2} />
      </mesh>
    </group>
  )
}
