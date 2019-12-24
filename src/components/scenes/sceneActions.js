export const setActions = actions => {
  return { type: "SET_ACTIONS", payload: actions };
};

export const clearActions = () => {
  return setActions([]);
};

export const titleAndUrl = (title = "", url = "") => {
  return { type: "SET_TITLE_URL", payload: { title, url } };
};
