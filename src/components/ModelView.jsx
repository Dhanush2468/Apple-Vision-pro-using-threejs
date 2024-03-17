import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import Lights from "./Lights"
import { Suspense } from "react";
import VisionPro from "./VisionPro";
import * as THREE from "three";
import Loader from "./Loader";
const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
  return (
    <View
    index={index}
    id={gsapType}
    className={`w-full h-full absolute  ${index === 2 ? 'right-[-100%]' : ''}`}
    
    >
       {/* Ambient Light */}
       <ambientLight intensity={0.3} />

       <PerspectiveCamera makeDefault position={[0, 0, 4]} />
       <Lights />
       <OrbitControls
         makeDefault
         ref={controlRef}
         enableZoom={false}
         enablePan={false}
         rotateSpeed={0.4}
         target={new THREE.Vector3(0, 0 ,0)}
         onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
       /> 

       <group ref={groupRef} name={`${index === 1} ? 'small : 'large'`} position={[0, 0, 0]} >
       <Suspense fallback={<Loader />}>
        <VisionPro 
       scale={index === 1 ? [1.1, 1.8, 1.5] : [1, 1, 1]}
       position={[0, -2.5, 0]}
       item={item}
       size={size}
        />
       </Suspense>
       </group>
       
    </View>
  )
}

export default ModelView