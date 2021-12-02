import * as actionTypes from "../types";

export const setName = (name) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SET_NAME, payload: name });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};

export const getStudent = (students) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SET_NAME, payload: students });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};

export const addStudent = (students) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.ADD_STUDENT, payload: students });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};

export const editStudent = (students) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.EDIT_STUDENT, payload: students });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};
 
export const deleteStudent = (studentId) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.DELETE_STUDENT, payload: studentId });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};
 