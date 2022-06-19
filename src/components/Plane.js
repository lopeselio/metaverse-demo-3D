import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

// Import Assets
import MetalMap from '../assets/MetalMap.png';
import MetalNormalMap from '../assets/MetalNormalMap.png';

const Plane = () => {
    const [surface, color] = useLoader(TextureLoader, [MetalNormalMap, MetalMap])
    return (
        <mesh position={[0, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[50, 50]} />
            <meshStandardMaterial color={"#404040"} />
        </mesh>
    );
}

export default Plane;