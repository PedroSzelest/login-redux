import types from "../types/types";

const handleError = payload => {
    return {
        type: types.ERROR_RESPONSE,
        payload
    };
};

export default handleError