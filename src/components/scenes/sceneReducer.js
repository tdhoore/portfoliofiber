const initialState = {
  pages: [
    {
      title: "Home",
      url: "/",
      visible: true,
      moveMe: {
        position: [0, -0.5, 0],
        scale: [1, 1, 1]
      }
    },
    {
      title: "Work",
      url: "/work",
      visible: false,
      moveMe: {
        position: [0, 0, 0],
        scale: [0.3, 0.3, 0.3]
      }
    },
    {
      title: "About",
      url: "/about",
      visible: false,
      moveMe: {
        position: [0, -0.5, 0],
        scale: [1, 1, 1]
      }
    },
    {
      title: "Contact",
      url: "/contact",
      visible: false,
      moveMe: {
        position: [0, -0.5, 0],
        scale: [1, 1, 1]
      }
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
