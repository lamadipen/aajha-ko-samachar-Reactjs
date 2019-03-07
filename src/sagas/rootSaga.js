import {all} from 'redux-saga/effects';
import {fetchBlogPostWatcher} from "./BlogPost";

export function* rootSaga() {
    yield all([
        fetchBlogPostWatcher()
    ]);
}