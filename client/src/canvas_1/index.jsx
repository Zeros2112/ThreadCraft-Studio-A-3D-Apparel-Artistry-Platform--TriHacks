import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";

// CanvasModel component for rendering the 3D scene using react-three/fiber
const CanvasModel = () => {
  return (
    // Canvas component from react-three/fiber for creating a 3D canvas
    <Canvas
      shadows // Enable shadows in the scene
      camera={{ position: [0, 0, 0], fov: 25 }} // Set initial camera position and field of view
      gl={{ preserveDrawingBuffer: true }} // Preserve the drawing buffer for taking screenshots
      className="w-full max-w-full h-full transition-all ease-in" // Additional CSS classes for styling
    >
      {/* ambientLight component for adding ambient light to the scene */}
      <ambientLight intensity={0.5} />

      {/* Environment component from react-three/drei for adding a preset environment */}
      <Environment preset="city" />

      {/* CameraRig component for managing camera position and rotation */}
      <CameraRig>
        {/* Backdrop component for rendering shadows and lights */}
        <Backdrop />

        {/* Center component from react-three/drei for centering content */}
        <Center>
          {/* Shirt component for rendering the 3D shirt model */}
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
