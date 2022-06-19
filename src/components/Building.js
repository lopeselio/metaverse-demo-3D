import React, { Suspense, useRef } from "react";

import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import MetalMap from '../assets/MetalMap.png';
import MetalNormalMap from '../assets/MetalNormalMap.png';
import Model from './gltf/villa/House/Scene'



const Building = ({ position, size, landId, landInfo, setLandName, setLandOwner, setHasOwner, setLandId }) => {
    // const [surface, color] = useLoader(TextureLoader, [MetalNormalMap, MetalMap])

    const clickHandler = () => {
        setLandName(landInfo.name)
        setLandId(landId)

        if (landInfo.owner === '0x0000000000000000000000000000000000000000') {
            setLandOwner('No Owner')
            setHasOwner(false)
        } else {
            setLandOwner(landInfo.owner)
            setHasOwner(true)
        }
    }

    return (
        // <Canvas style={{ background: "#171717" }}>
        <mesh position={position} onClick={clickHandler}>
            {/* <boxBufferGeometry args={size} /> */}
            <ambientLight intensity={1} />
            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
            <Suspense fallback={null}>
            <Model />
            </Suspense>
            {/* <meshStandardMaterial map={color} normalMap={surface} metalness={0.25} /> */}
        </mesh>
        // </Canvas>
    );
}

export default Building;