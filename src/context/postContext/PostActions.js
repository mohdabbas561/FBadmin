export const getPOSTStart = () => ({
  type: "GET_POST_START",
});

export const getPOSTSuccess = (posts) => ({
  type: "GET_POST_SUCCESS",
  payload: posts,
});

export const getPOSTFailure = () => ({
  type: "GET_POST_FAILURE",
});


export const deletePOSTStart = () => ({
  type: "DELETE_POST_START",
});

export const deletePOSTSuccess = (id) => ({
  type: "DELETE_POST_SUCCESS",
  payload: id,
});

export const deletePOSTFailure = () => ({
  type: "DELETE_POST_FAILURE",
});
