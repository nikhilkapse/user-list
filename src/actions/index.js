import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const promise = await jsonPlaceholder.get("/posts");
    dispatch({
      type: "FETCH_POSTS",
      payload: promise
    });
  };
};
