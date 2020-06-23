import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from "./types";

// Get techs from server
export const getTechs = () => async (dispatch) => {
  // redux-thunk middleware allows async functions inside actions, so we can wait for a response, then dispatch to reducer
  try {
    setLoading();

    const res = await fetch("./techs");
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err,
    });
  }
};

// Add technician to server
export const addTech = (tech) => async (dispatch) => {
  // redux-thunk middleware allows async functions inside actions, so we can wait for a response, then dispatch to reducer
  try {
    setLoading();

    const res = await fetch("./techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err,
    });
  }
};

// Delete technician from server
export const deleteTech = (id) => async (dispatch) => {
  // redux-thunk middleware allows async functions inside actions, so we can wait for a response, then dispatch to reducer
  try {
    setLoading();

    await fetch(`./techs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err,
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
