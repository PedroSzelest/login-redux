import types from "../types/types";

const API_KEY = "z8xhg39ab9wPgFVbm64nczbaHiNDm7Wbp2tPpRdl8p8"

const getImages = ()=> async dispatch => {
    const response = await fetch(`https://api.unsplash.com/photos/?client_id=${API_KEY}&per_page=40&page=4`);
    const res = await response.json();
    dispatch(getAll(res));
};

const getAll = payload => ({
    type: types.GET_IMAGES,
    payload
});

export default getImages
