import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { OrbitControls, Stage, Text, Bounds } from "@react-three/drei";
import { Warrior } from "./Warrior";
import { Ciego_enemy } from "./Ciego_enemy";
import { Room } from "./Room";
import * as THREE from 'three';
import { Interactuar } from "./Interactuar";
import { InteractMobile } from "./InteractMobile";
import { ModelosMobile} from "./ModelosMobile";

/*function Model(props) {
    const meshRef = useRef();

    return  <Warrior ref={meshRef}  {...props} />
}*/
function RotatableModel({ children, velocidad = 0.007, rotation }) {
    const { bind } = Interactuar(velocidad, { rotation });
    return <group {...bind}>{children}</group>;
}

function InteractWarrior({ rotation, ...props }) {
    const { bind } = Interactuar(0.007, { rotation });

    return (
        <group {...props}>
            <group {...bind}>
                <Warrior />
            </group>

            <Text
                    position={[0, -0.5, 0]}
                    fontSize={1}
                    color="black"
                    anchorX="center"
                    anchorY="top"
                >
                    Guerrero lowpoly
            </Text>
        </group>
    );
}

function InteractCiego({ rotation, ...props }) {
    const { bind } = Interactuar(0.007, { rotation });

    return (
        <group {...props}>
            <group {...bind}>
                <Ciego_enemy />
            </group>

            <Text
                    position={[0, -0.5, 0]}
                    fontSize={2}
                    color="black"
                    anchorX="center"
                    anchorY="top"
                >
                    Zombie Ciego
            </Text>
        </group>
    );
}

function InteractRoom({ rotation, ...props }) {
    const { bind } = Interactuar(0.005, { rotation }); 

    return (
        <group {...props}>
            <group {...bind}>
                <Room />
            </group>

            <Text
                    position={[0, -3, 0]}
                    fontSize={1.5}
                    color="black"
                    anchorX="center"
                    anchorY="top"
                >
                    Habitación lowpoly
            </Text>
        </group>
    );
}

export default function Modelo3d() {
    const isMobile = InteractMobile();

    const warriorPos = isMobile ? [0, 3, 0] : [0, 0, 0];
    const ciegoPos = isMobile ? [0, -3, 0] : [-5, -0.2, 0];

    const roomPos = isMobile ? [0, -9, 0] : [6, -2, 0];
    const cameraPos = isMobile ? [0, 0, 16] : [0, 0.5, 8];

    const mIzquierda = -1.5;

    if (isMobile) {
        return (
            <div style={{ width: "100%", padding: "10px 0" }}>
                <ModelosMobile cameraPos={[0, 0, 5.5]} fov={50}>
                    <InteractWarrior scale={[0.25, 0.25, 0.25]} position={[0, -1.4, 0]} />
                </ModelosMobile>

                <ModelosMobile cameraPos={[0, 0, 7.5]} fov={50}>
                    <InteractCiego 
                        scale={[0.18, 0.18, 0.18]} 
                        position={[0, -2.7, 0]} 
                        rotation={[0, 280 + Math.PI, 0]} 
                    />
                </ModelosMobile>
                
                <ModelosMobile cameraPos={[0, 1, 10]} fov={50}>
                    <InteractRoom scale={[0.40, 0.40, 0.40]} position={[0, -2, 0]} />
                </ModelosMobile>
            </div>
        );
    }

    return (
        <Canvas style ={{ height: "500px"}} camera={{ fov: 45, position: cameraPos }}>
            <ambientLight intensity={2.5} />
            <directionalLight position={[5, 8, 5]} intensity={3} castShadow />
            <directionalLight position={[-5, 2, 5]} intensity={2} />

            <group position={[mIzquierda, 0, 0]}>
                <InteractWarrior scale={[0.20, 0.20, 0.20]} position={warriorPos} />
                <InteractCiego
                    scale={[0.10, 0.10, 0.10]}
                    position={ciegoPos}
                    rotation={[0, 280 + Math.PI, 0]}
                />
                <InteractRoom 
                    scale={[0.30, 0.30, 0.30]}
                    position={roomPos}
                />
            </group> 
        </Canvas>
    );
}