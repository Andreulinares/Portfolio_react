import { Canvas } from "@react-three/fiber";

export function ModelosMobile({ children, cameraPos = [0, 0, 7], fov = 45 }) {
    return (
        <div style={{ width: "100%", height: "360px", marginBottom: "15px", textAlign: "center" }}>
            <Canvas 
                style={{ height: "320px", touchAction: "pan-y" }} 
                camera={{ fov: fov, position: cameraPos }} 
            >
                <ambientLight intensity={2.5} />
                <directionalLight position={[5, 8, 5]} intensity={3} castShadow />
                <directionalLight position={[-5, 2, 5]} intensity={2} />
                
                {children}
            </Canvas>
        </div>
    );
}