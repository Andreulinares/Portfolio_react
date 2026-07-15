import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { OrbitControls, Stage, Text, Bounds } from "@react-three/drei";
import { Warrior } from "./Warrior";
import { Ciego_enemy } from "./Ciego_enemy";
import * as THREE from 'three';
import { Interactuar } from "./Interactuar";
import { InteractMobile } from "./InteractMobile";

/*function Model(props) {
    const meshRef = useRef();

    return  <Warrior ref={meshRef}  {...props} />
}*/

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

export default function Modelo3d() {
    const isMobile = InteractMobile();

    const warriorPos = isMobile ? [0, 3, 0] : [0, 0, 0];
    const ciegoPos = isMobile ? [0, -3, 0] : [-5, -0.2, 0];

    const cameraPos = isMobile ? [0, 0, 16] : [0, 0.5, 8];
    const modelos = (
        <>
            <InteractWarrior scale={[0.20, 0.20, 0.20]} position={warriorPos} />
            <InteractCiego
                scale={[0.10, 0.10, 0.10]}
                position={ciegoPos}
                rotation={[0, 280 + Math.PI, 0]}
            />
        </>
    );
    return (
        <Canvas key={isMobile ? "mobile" : "desktop"} style ={{ height: "500px" }} camera={{ fov: isMobile ? 50 : 45, position: cameraPos }}>
            <ambientLight intensity={2.5} />
            <directionalLight position={[5, 8, 5]} intensity={3} castShadow />
            <directionalLight position={[-5, 2, 5]} intensity={2} />

            {isMobile ? (
                <Bounds fit clip observe margin={1.2}>
                    {modelos}
                </Bounds>
            ) : (
                modelos
            )}
        </Canvas>
    );
}