const initialState = {
  title: "",
  url: "",
  actions: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIONS":
      return {
        ...state,
        actions: action.payload
      };
    case "SET_TITLE_URL":
      return {
        ...state,
        title: action.payload.title,
        url: action.payload.url
      };
    default:
      return state;
  }
};
