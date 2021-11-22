import * as actionTypes from "../types";

export const setName = (name) => async (dispatch) =>
{
    try{
        dispatch({type: actionTypes.SET_NAME, payload : name});
    }catch(err){
        dispatch({type: actionTypes.USER_ERROR, payload: err});
    }
};

