import types from "../types/types";

const default_state = {
    displayName: "",
    email: "",
    uid: ""
};

const userReducer = (state = default_state, action) => {
    switch (action.type) {
        case types.USER_INFO:
            return {
                ...state,
                displayName: action.payload.displayName,
                email: action.payload.email,
                uid: action.payload.uid
            };

        case types.LOGOUT:
            return {};

        default: 
            return state;
    }
}

export default userReducer