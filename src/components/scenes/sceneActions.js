export const actions = actions => {
  return { type: "SET_ACTIONS", payload: actions };
};

export const titleAndUrl = (title = "", url = "", playAnimation = false) => {
  return { type: "SET_TITLE_URL", payload: { title, url, playAnimation } };
};

export const canAnimateAction = (title = "", canAnimate = false) => {
  return { type: "SET_CANANIMATE", payload: { title, canAnimate } };
};
