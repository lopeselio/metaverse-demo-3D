import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

import grass from '../assets/gravel.jpeg';
import grasstexture from '../assets/graveltexture.jpeg';

const Plot = ({ position, size, landId, landInfo, setLandName, setLandOwner, setHasOwner, setLandId }) => {
    const [surface, color] = useLoader(TextureLoader, [grasstexture, grass])
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
        <mesh position={position} onClick={clickHandler}>
            <planeBufferGeometry attach="geometry" args={size} />
            <meshStandardMaterial map={color} normalMap={surface} />
        </mesh>
    );
}

export default Plot;