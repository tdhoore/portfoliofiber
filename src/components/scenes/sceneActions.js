export const actions = actions => {
  return { type: "SET_ACTIONS", payload: actions };
};

export const canAnimateAction = (title = "", canAnimate = false) => {
  return { type: "SET_CANANIMATE", payload: { title, canAnimate } };
};

export const curretPageIndex = (currentPageIndex = 0) => {
  return { type: "SET_CURRENTPAGE", payload: { currentPageIndex } };
};

export const glitch = (glitch = false) => {
  return { type: "SET_GLITCH", payload: { glitch } };
};

export const lastPageIndex = (lastPageIndex = 0) => {
  return { type: "SET_LASTPAGE", payload: { lastPageIndex } };
};

export const visible = (index, visible = false) => {
  return { type: "SET_VISIBLE", payload: { index, visible } };
};
