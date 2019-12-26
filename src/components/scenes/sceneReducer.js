const initialState = {
  title: "",
  url: "",
  pages: [
    {
      title: "Home",
      url: "/",
      canAnimate: true
    },
    {
      title: "Work",
      url: "/work",
      canAnimate: true
    },
    {
      title: "About",
      url: "/about",
      canAnimate: true
    }
  ],
  actions: {}
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
        ...action.payload
      };
    case "SET_CANANIMATE":
      const pages = state.pages.map(page => {
        if (
          page.title.toLowerCase() === action.payload.title.toLowerCase() ||
          page.title === ""
        ) {
          //set animation
          page.canAnimate = action.payload.canAnimate;
        }

        return { ...page };
      });

      return {
        ...state,
        ...pages
      };
    default:
      return state;
  }
};
