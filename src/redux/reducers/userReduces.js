import * as actionTypes from "../types";

const initialState ={
    name:"",
    counter: null,
    error: null, 
}

 function userReducer(state=initialState, action)
{
    switch(action.type)
    {
        case actionTypes.SET_NAME: 
        return{
            ...state,
            name: action.payload,
            counter: state.counter + 1,
        };

      

        case actionTypes.USER_ERROR: 
        return{
            ...state,
            error: action.payload,
        };
        default:
            return{
                ...state,
            }
    }
}

export default userReducer;