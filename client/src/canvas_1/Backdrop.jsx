import React, { useRef } from "react";

// Importing necessary components from @react-three/drei
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

// Backdrop component for rendering shadows and lights in the 3D environment
const Backdrop = () => {
  // Create a reference for shadows
  const shadows = useRef();

  return (
    // AccumulativeShadows component for accumulating shadows over frames
    <AccumulativeShadows
      ref={shadows} // Assigning the shadows reference
      temporal // Enabling temporal accumulation for smoother shadows
      frames={60} // Number of frames to accumulate shadows
      alphaTest={0.85} // Alpha test value for transparency
      scale={10} // Scaling factor for the shadows
      rotation={[Math.PI / 2, 0, 0]} // Rotation of the shadows
      position={[0, 0, -0.14]} // Position of the shadows in the 3D space
    >
      {/* RandomizedLight components for creating dynamic lights */}
      <RandomizedLight
        amount={4} // Number of lights
        radius={9} // Radius of the lights
        intensity={1} // Intensity of the lights
        ambient={0.25} // Ambient light level
        position={[5, 5, -10]} // Position of the lights
      />
      <RandomizedLight
        amount={4} // Number of lights
        radius={5} // Radius of the lights
        intensity={1} // Intensity of the lights
        ambient={0.55} // Ambient light level
        position={[-5, 5, -9]} // Position of the lights
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
