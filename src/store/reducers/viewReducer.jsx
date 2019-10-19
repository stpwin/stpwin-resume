const initialState = {
  viewPath: null
};

const viewReducer = (state = initialState, action) => {
  console.log("viewReducer:", action.type);
  switch (action.type) {
    case "VIEW_CHANGED":
      return {
        viewPath: action.path
      };
    default:
      return state;
  }
};

export default viewReducer;
