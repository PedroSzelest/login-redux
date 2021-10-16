import types from "../types/types";

export const addFavorite = payload => ({
    type: types.ADD_FAVORITE,
    payload
});

export const removeFavorite = payload => ({
    type: types.REMOVE_FAVORITE,
    payload
})

