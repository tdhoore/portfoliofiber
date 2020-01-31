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
  fog: false,
  emissiveIntensity: 1
};

export const glowMatPink = {
  ...glowMat,
  emissive: pinkColor
};
