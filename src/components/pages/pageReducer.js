const initialState = {
  currentItem: 0,
  lastItem: 0,
  projects: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENTITEM":
      return {
        ...state,
        currentItem: action.payload
      };
    case "SET_LASTITEM":
      return {
        ...state,
        currentItem: action.payload
      };
    case "SET_PROJECTS":
      return {
        ...state,
        projects: action.payload
      };
    default:
      return state;
  }
};
