import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Float, Html } from "@react-three/drei";

// Placeholder: Use a free animated 3D model (swap URL for your own techno boy GLB/GLTF later)
// For now, we'll use a simple animated robot model from public domain
function TechnoBoyModel(props) {
  try {
    const { scene } = useGLTF("https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/RobotExpressive/glTF-Binary/RobotExpressive.glb");
    return <primitive object={scene} {...props} />;
  } catch (e) {
    return null;
  }
}

const TechnoBoy3D = () => {
  const [modelError, setModelError] = useState(false);

  return (
    <div className="w-full h-80 md:h-[28rem] flex items-center justify-center">
      <Canvas camera={{ position: [0, 1.2, 4], fov: 45 }} shadows style={{background: 'linear-gradient(135deg, #18181b 70%, #23272f 100%)'}}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 5, 2]} intensity={1.2} castShadow />
        <Suspense fallback={<Html center><span style={{color:'white'}}>Loading 3D model...</span></Html>}>
          <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
            {/* Try to load the robot model, fallback to box if error */}
            {modelError ? (
              <Html center><span style={{color:'red'}}>3D model failed to load.<br/>Showing fallback box.</span></Html>
                ) : (
              <TechnoBoyModel scale={1.8} position={[0, -1, 0]}
                onError={() => setModelError(true)}
              />
            )}
            {/* Always show box if model fails */}
            {modelError && (
              <mesh>
                <boxGeometry args={[1.5, 1.5, 1.5]} />
                <meshStandardMaterial color="#38bdf8" />
              </mesh>
            )}
          </Float>
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
};

export default TechnoBoy3D;

// To use your own character, upload a GLB/GLTF file and change the URL in useGLTF above.
