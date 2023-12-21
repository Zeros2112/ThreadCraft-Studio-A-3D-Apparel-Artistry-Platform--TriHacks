import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";

import state from "../store/index_3";

const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    // set the initial position of the model
    let targetPosition = [-15, 0, 50];
    if (snap.intro) {
      if (isBreakpoint) targetPosition = [0, 0, -2];
      if (isMobile) targetPosition = [0, 0.2, 2.5];
    } else {
      if (isMobile) targetPosition = [0, 0, 2.5];
      else targetPosition = [0, 0, 2];
    }

    // set model camera position
    easing.damp3(state.camera.position, targetPosition, 10, delta);

    // set the model rotation smoothly
    const rotationY = snap.intro ? -0.5236 / 4.25 : 0;
    const rotationX = snap.intro ? -0.5236 / 2 : 0; // Rotate 180 degrees in x-direction
    const rotationZ = snap.intro ? -0.5236 / 4.25 : 0; // Rotate 180 degrees in y-direction
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 5 + rotationY, state.pointer.x / 5 + rotationX, 0],
      50,
      delta
    );
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
