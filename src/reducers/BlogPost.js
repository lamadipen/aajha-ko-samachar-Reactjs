import {POST_FETCH_ALL, POST_FETCH_FAILED, POST_FETCH_SUCCEEDED} from "../actions/actionTypes";

const initialState = {
    fetching : false,
    blogPost: null,
    error: null
}

export const blogPostReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case POST_FETCH_ALL:
            return {...state,fetching: true, error: null};
        case POST_FETCH_SUCCEEDED:
            return {...state, fetching: false, blogPost: action.blogPost};
        case POST_FETCH_FAILED:
            return {...state, fetching: false, error: action.message}
        default:
            return state;
    }
}