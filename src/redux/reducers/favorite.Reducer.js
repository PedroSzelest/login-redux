import types from "../types/types";

const default_state = {
    favorite_list: []
};

const setFavoriteReducer = (state = default_state, action)=> {
    switch (action.type) {
        case types.ADD_FAVORITE:
            return {
                ...state,
                favorite_list: [...state.favorite_list, action.payload]
            };

        case types.REMOVE_FAVORITE:
            return {
                ...state,
                favorite_list: state.favorite_list.filter( item => item.id !== action.payload )
            }
        
        default:
            return state
    };
};

export default setFavoriteReducer