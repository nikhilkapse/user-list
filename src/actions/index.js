import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const promise = await jsonPlaceholder.get("/posts");
    dispatch({
      type: "FETCH_POSTS",
      payload: promise.data
    });
  };
};
export const fetchUser = id => {
  return async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({
      type: "FETCH_USER",
      payload: response.data
    });
  };
};
