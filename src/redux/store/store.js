import { createStore, combineReducers, applyMiddleware, compose } from "redux";

//Reducers
import userReducer from "../reducers/user.Reducer";
import errorReducer from "../reducers/error.Reducer";
import getImagesReducer from "../reducers/getImages.Reducer";
import setFavoriteReducer from "../reducers/favorite.Reducer";

import thunk from "redux-thunk";

const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    userReducer,
    errorReducer,
    getImagesReducer,
    setFavoriteReducer,
});

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)