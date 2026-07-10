import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Warrior } from "./Warrior";

function Model(props) {
    const meshRef = useRef();

    return  <Warrior ref={meshRef}  {...props} />
}

export default function Modelo3d() {
    return (
        <Canvas style ={{ height: "500px" }} camera={{ fov: 45, position: [0, 2, 8] }}>
            <ambientLight intensity={2.5} />
            <directionalLight position={[5, 8, 5]} intensity={3} castShadow />
            <directionalLight position={[-5, 2, 5]} intensity={2} />

            <Model scale={[0.20, 0.20, 0.20]} position={[0, 0, 0]} />
            <OrbitControls enableZoom={true} target={[0, 0, 0]} />
        </Canvas>
    )
}