import * as actionTypes from "../types";

const initialState = {
  name: "",
  counter: null,
  error: null,
  students: [
    { id: 1, studentName: "Bryce", studentCourse: "BSIT" },
    { id: 2, studentName: "Bit", studentCourse: "BSED" },
    { id: 3, studentName: "Harold", studentCourse: "BAD" },
  ],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_NAME:
      return {
        ...state,
        name: action.payload,
        counter: state.counter + 1,
      };
    case actionTypes.GET_STUDENT:
      return {
        ...state,
        students: action.payload,
      };
    case actionTypes.ADD_STUDENT:
      return {
        ...state,
        students: state.students.concat(action.payload),
      };
    case actionTypes.EDIT_STUDENT:
      return {
        ...state,
        students: state.students.map((content, i) =>
          content.id === action.payload.id
            ? {
                ...content,
                studentName: action.payload.studentName,
                studentCourse: action.payload.studentCourse,
              }
            : content
        ),
      };
    case actionTypes.DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter((item) => item.id !== action.payload),
      };

    case actionTypes.USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default userReducer;
