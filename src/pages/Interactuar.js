import { useRef, useState, useLayoutEffect } from "react";
import * as THREE from "three";

export function Interactuar(velocidad = 0.007, options = {}) {
    const groupRef = useRef();
    const [isDragging, setIsDragging] = useState(false);
    const previousPointer = useRef({ x: 0, y: 0 });

    const [initX = 0, initY = 0] = options.rotation ?? [];

    const pitch = useRef(initX);
    const yaw = useRef(initY);

    const maxPitch = options.maxPitch ?? Math.PI / 2 - 0.1;
    const minPitch = options.minPitch ?? -(Math.PI / 2 - 0.1);

    const applyRotation = () => {
        if (!groupRef.current) return;
        const euler = new THREE.Euler(pitch.current, yaw.current, 0, "YXZ");
        groupRef.current.quaternion.setFromEuler(euler);
    }
    
    useLayoutEffect(() => {
        pitch.current = initX;
        yaw.current = initY;
        applyRotation();
    }, [initX, initY]);

    const handlePointerDown = (e) => {
        e.stopPropagation();
        e.target.setPointerCapture(e.pointerId);
        setIsDragging(true);
        previousPointer.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e) => {
        if (!isDragging || !groupRef.current) return;
        e.stopPropagation();

        const deltaX = e.clientX - previousPointer.current.x;
        const deltaY = e.clientY - previousPointer.current.y;

        yaw.current -= deltaX * velocidad;
        pitch.current = THREE.MathUtils.clamp(
            pitch.current - deltaY * velocidad,
            minPitch,
            maxPitch
        );

        applyRotation();

        previousPointer.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = (e) => {
        if (e.target.hasPointerCapture?.(e.pointerId)) {
            e.target.releasePointerCapture(e.pointerId);
        }
        setIsDragging(false);
    };

    return {
        groupRef,
        isDragging,
        bind: {
            ref: groupRef,
            onPointerDown: handlePointerDown,
            onPointerMove: handlePointerMove,
            onPointerUp: handlePointerUp,
        },
    };
}