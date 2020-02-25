export const curretPageIndex = (currentPageIndex = 0) => {
  return { type: "SET_CURRENTPAGE", payload: { currentPageIndex } };
};

export const lastPageIndex = (lastPageIndex = 0) => {
  return { type: "SET_LASTPAGE", payload: { lastPageIndex } };
};

export const visible = (index, visible = false) => {
  return { type: "SET_VISIBLE", payload: { index, visible } };
};

export const sceneRotation = (sceneRotation = 0) => {
  return { type: "SET_SCENEROT", payload: { sceneRotation } };
};
