import {combineReducers} from "redux";
import {newsReducer} from "./News";
import {blogPostReducer} from "./BlogPost";

export const rootReducer = combineReducers({
    newsData : newsReducer,
    blogPostData: blogPostReducer

});