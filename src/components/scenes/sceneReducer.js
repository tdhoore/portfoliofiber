const initialState = {
  pages: [
    {
      title: "Home",
      url: "/",
      canAnimate: true,
      visible: true,
      camPos: [0, 0, 0]
    },
    {
      title: "Work",
      url: "/work",
      canAnimate: true,
      visible: false,
      camPos: [0, 0, 45]
    },
    {
      title: "About",
      url: "/about",
      canAnimate: true,
      visible: false,
      camPos: [0, 0, 60]
    }
  ],
  currentPageIndex: 0,
  lastPageIndex: 0,
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
    case "SET_LASTPAGE":
      return {
        ...state,
        ...action.payload
      };
    case "SET_VISIBLE":
      const pages = state.pages.map((page, index) => {
        if (index === action.payload.index) {
          //set animation
          page.visible = action.payload.visible;
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
