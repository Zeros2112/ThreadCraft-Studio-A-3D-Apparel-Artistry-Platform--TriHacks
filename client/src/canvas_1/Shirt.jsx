import React from "react";
import { easing } from "maath"; // Assuming 'maath' is a library for easing functions
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import state from "../store/index.js";

// Shirt component for rendering the 3D shirt model with decals
const Shirt = () => {
  // Use the Valtio hook to get a snapshot of the state
  const snap = useSnapshot(state);

  // useGLTF is a hook from react-three/drei for loading glTF models
  const { nodes, materials } = useGLTF("/shirt_baked.glb");

  // useTexture is a hook from react-three/drei for loading textures
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  // useFrame is a hook provided by react-three/fiber to perform actions on each frame
  useFrame((state, delta) =>
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
  );

  // Create a string representation of the state for identifying changes
  const stateString = JSON.stringify(snap);

  // Return a group containing the 3D shirt model with possible decals
  return (
    <group key={stateString}>
      {/* Mesh representing the 3D shirt model */}
      <mesh
        castShadow // Enable the mesh to cast shadows
        geometry={nodes.T_Shirt_male.geometry} // Geometry of the shirt
        material={materials.lambert1} // Lambert material for the shirt
        material-roughness={1} // Roughness of the material
        dispose={null} // Dispose property (not used in this case)
      >
        {/* Apply fullTexture decal if isFullTexture is true in the state */}
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}

        {/* Apply logoTexture decal if isLogoTexture is true in the state */}
        {snap.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
