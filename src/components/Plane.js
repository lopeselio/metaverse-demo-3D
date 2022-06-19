import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

// Import Assets
import grass from '../assets/grass.jpeg';
import grasstexture from '../assets/grasstexture.png';

const Plane = () => {
    const [surface, color] = useLoader(TextureLoader, [grasstexture, grass])
    return (
        <mesh position={[0, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[50, 50]} />
            <meshStandardMaterial map={color} normalMap={surface} />
        </mesh>
    );
}

export default Plane;