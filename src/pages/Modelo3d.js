import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Cube() {
    const cube = useRef();

    useFrame(() => {
        cube.current.rotation.x += 0.01;
        cube.current.rotation.y += 0.01;
    })
    return (
        <mesh ref={cube}>
            <boxGeometry />
            <meshStandardMaterial color="royalblue" />
        </mesh>
    )
}

export default function Modelo3d() {
    return (
        <Canvas style ={{ height: "500px" }}>
            <ambientLight />
            <pointLight position = {[10, 10, 10]} />

            <Cube />
        </Canvas>
    )
}