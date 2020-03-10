export const currentItem = actions => {
  return { type: "SET_CURRENTITEM", payload: actions };
};

export const projects = actions => {
  return { type: "SET_PROJECTS", payload: actions };
};

export const lastItem = actions => {
  return { type: "SET_LASTITEM", payload: actions };
};

export const workRot = actions => {
  return { type: "SET_WORKROT", payload: actions };
};
