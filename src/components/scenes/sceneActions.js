export const actions = actions => {
  return { type: "SET_ACTIONS", payload: actions };
};

export const titleAndUrl = (title = "", url = "") => {
  return { type: "SET_TITLE_URL", payload: { title, url } };
};
