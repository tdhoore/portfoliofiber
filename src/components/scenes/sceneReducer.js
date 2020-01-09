const initialState = {
  pages: [
    {
      title: "Home",
      url: "/",
      canAnimate: true,
      camPos: [0, 0, 0]
    },
    {
      title: "Work",
      url: "/work",
      canAnimate: true,
      camPos: [0, 0, 45]
    },
    {
      title: "About",
      url: "/about",
      canAnimate: true,
      camPos: [0, 12, 45]
    }
  ],
  currentPageIndex: 0,
  glitch: false,
  actions: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIONS":
      return {
        ...state,
        actions: action.payload
      };
    case "SET_CANANIMATE":
      const pages = state.pages.map(page => {
        if (
          page.title.toLowerCase() === action.payload.title.toLowerCase() ||
          action.payload.title === ""
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
    case "SET_CURRENTPAGE":
      return {
        ...state,
        ...action.payload
      };
    case "SET_GLITCH":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
