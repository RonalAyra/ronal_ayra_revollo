import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import sceneModel from "../../assets/3d/about/scene.gltf?url";
import * as THREE from "three";

const CanvasLoader = () => {
  return (
    <Html
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin mx-auto mb-2"></div>
      <p className="text-blue-600 text-sm">Cargando modelo 3D...</p>
    </Html>
  );
};

type ComputersProps = {
  isMobile: boolean;
};

const ComputersWithModel = ({ isMobile }: ComputersProps) => {
  const computer = useGLTF(sceneModel);

  useEffect(() => {
    computer.scene.traverse((child: THREE.Object3D) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [computer]);

  return (
    <mesh>
      <ambientLight intensity={1.2} />
      <hemisphereLight intensity={0.6} groundColor="#444" />
      <pointLight intensity={1} position={[10, 10, 10]} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.015 : 0.015}
        position={[0, 0, 0]}
      />
    </mesh>
  );
};

const ComputersComponent = ({ isMobile }: ComputersProps) => {
  return (
    <Suspense fallback={<CanvasLoader />}>
      <ComputersWithModel isMobile={isMobile} />
    </Suspense>
  );
};

const LaptopCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{
        position: isMobile ? [4, 2, 4] : [6, 3, 6],
        fov: isMobile ? 30 : 40,
      }}
      gl={{
        preserveDrawingBuffer: true,
        alpha: true,
      }}
      style={{
        background: "transparent",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.8}
        />
        <ComputersComponent isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default LaptopCanvas;
