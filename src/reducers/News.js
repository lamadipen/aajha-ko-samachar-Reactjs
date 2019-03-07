import {NEWS_FETCH_ALL} from "../actions/actionTypes";

const initialState = {
    fetching: false,
    news: null,
    error: null
}

export const newsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case NEWS_FETCH_ALL:
            return {...state, fetching: true, error: null};
        default:
            return state
    }
}

