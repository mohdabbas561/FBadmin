const POSTReducer = (state, action) => {
  switch (action.type) {
    case "GET_POST_START":
      return {
        posts: [],
        isFetching: true,
        error: false,
      };
    case "GET_POST_SUCCESS":
      return {
        posts: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_POST_FAILURE":
      return {
        posts: [],
        isFetching: false,
        error: true,
      };
   
    case "DELETE_POST_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_POST_SUCCESS":
      return {
        post: state.post.filter((post) => post._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_POST_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default POSTReducer;
