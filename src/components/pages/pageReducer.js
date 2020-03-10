const initialState = {
  currentItem: 0,
  lastItem: 0,
  projects: [],
  workRotation: 0
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

    case "SET_WORKROT":
      return {
        ...state,
        workRotation: action.payload
      };
    default:
      return state;
  }
};
