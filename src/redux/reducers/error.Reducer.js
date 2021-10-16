import types from "../types/types";

const default_state = {
    status: false,
    message: ""
};

const errorReducer = (state = default_state, action)=> {
    switch (action.type) {
        case types.ERROR_RESPONSE:
            return {
                ...state,
                status: action.payload.status,
                message: action.payload.message
            };
        
        default:
            return state;
    }
};

export default errorReducer