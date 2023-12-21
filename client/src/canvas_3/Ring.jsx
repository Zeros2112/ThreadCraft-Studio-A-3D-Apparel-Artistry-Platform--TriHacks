import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import state from "../store/index_3.js";

const Ring = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/ring.glb");

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta) =>
    easing.dampC(materials.mat0.color, snap.color, 0.25, delta)
  );

  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.imagetostl_mesh0.geometry}
        material={materials.mat0}
        dispose={null}
      >
        {snap.isFullTexture && (
          <Decal
            position={[-2.3, 0, 2]}
            rotation={[-2.3, 0, 2]}
            scale={1}
            material={materials.mat0} // Apply the material to the decal
          >
            <meshBasicMaterial attach="material" map={fullTexture} />
          </Decal>
        )}

        {snap.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            material={materials.mat0} // Apply the material to the decal
          >
            <meshBasicMaterial attach="material" map={logoTexture} />
          </Decal>
        )}
      </mesh>
    </group>
  );
};

export default Ring;
