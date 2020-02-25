const initialState = {
  pages: [
    {
      title: "Home",
      url: "/",
      visible: true
    },
    {
      title: "Work",
      url: "/work",
      visible: false
    },
    {
      title: "About",
      url: "/about",
      visible: false
    },
    {
      title: "Contact",
      url: "/contact",
      visible: false
    }
  ],
  currentPageIndex: 0,
  lastPageIndex: 0,
  sceneRotation: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
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
    case "SET_SCENEROT":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
