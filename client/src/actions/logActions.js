import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SEARCH_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "./types";

// Get logs from server (Refactored with error handling)
export const getLogs = () => async (dispatch) => {
  // redux-thunk middleware allows async functions inside actions, so we can wait for a response, then dispatch to reducer
  try {
    setLoading();

    const res = await fetch("./logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err,
    });
  }
};

// Add new log
export const addLog = (log) => async (dispatch) => {
  // redux-thunk middleware allows async functions inside actions, so we can wait for a response, then dispatch to reducer
  try {
    setLoading();

    const res = await fetch("./logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err,
    });
  }
};

// Delete log from server
export const deleteLog = (id) => async (dispatch) => {
  // redux-thunk middleware allows async functions inside actions, so we can wait for a response, then dispatch to reducer
  try {
    setLoading();

    await fetch(`./logs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err,
    });
  }
};

// Update log on server
export const updateLog = (log) => async (dispatch) => {
  // redux-thunk middleware allows async functions inside actions, so we can wait for a response, then dispatch to reducer
  try {
    setLoading();

    const res = await fetch(`./logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err,
    });
  }
};

// Search server logs (for SearchBar.js)
export const searchLogs = (text) => async (dispatch) => {
  // redux-thunk middleware allows async functions inside actions, so we can wait for a response, then dispatch to reducer
  try {
    setLoading();

    const res = await fetch(`./logs?q=${text}`); // this works with json-server :)
    const data = await res.json();

    dispatch({
      type: SEARCH_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err,
    });
  }
};

// Set current log (for editing logs)
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

// Clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
