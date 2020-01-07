export const blueColor = "#60CAE0";
export const pinkColor = "#FF44B4";

export const defaultMat = {
  color: "#E7E7E7",
  roughness: 1,
  fog: true
};

export const glowMat = {
  emissive: blueColor,
  roughness: 0,
  //emissiveIntensity: 2,
  fog: false
};

export const glowMatPink = {
  ...glowMat,
  emissive: pinkColor
};
