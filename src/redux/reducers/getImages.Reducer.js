import types from "../types/types";

const default_state = {
    images_list: []
};

const getImagesReducer = (state = default_state, action)=> {
    switch (action.type) {
        case types.GET_IMAGES: 
            return {
                ...state,
                images_list: action.payload 
            };

        default: 
            return state
    };
};

export default getImagesReducer