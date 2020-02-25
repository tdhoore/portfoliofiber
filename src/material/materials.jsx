import * as THREE from "three";

export const defaultColor = "#e7e7e7";
export const darkColor = "#C3C3C3";
export const blueColor = "#60CAE0";
export const pinkColor = "#FF44B4";
export const greenColor = "#00E076";

export const defaultMat = new THREE.MeshStandardMaterial({
  color: new THREE.Color(defaultColor),
  roughness: 0.5,
  metalness: 0
});

export const darkMat = new THREE.MeshStandardMaterial({
  color: new THREE.Color(darkColor),
  roughness: 0.5,
  metalness: 0
});

export const glowMat = new THREE.MeshStandardMaterial({
  emissive: new THREE.Color(blueColor),
  roughness: 0,
  fog: false,
  emissiveIntensity: 2
});

export const glowMatPink = new THREE.MeshStandardMaterial({
  emissive: new THREE.Color(pinkColor),
  roughness: 0,
  fog: false,
  emissiveIntensity: 2.13
});
