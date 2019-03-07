import {put, takeEvery, call} from 'redux-saga/effects';
import {POST_FETCH_ALL, POST_FETCH_FAILED, POST_FETCH_SUCCEEDED} from "../actions/actionTypes";

//watcher will watch to actions triggered and map to corrosponding functions
export function* fetchBlogPostWatcher() {
    yield takeEvery(POST_FETCH_ALL,fetchAllBlogPost);
}

export function* fetchAllBlogPost(action, fetch = window.fetch) {
    try {
        const posts = yield call(fetch, "http://localhost:3001/posts");
        const result = yield posts.json();
        yield put({type: POST_FETCH_SUCCEEDED, blogPost:result});
    }catch (e) {
        yield put({type: POST_FETCH_FAILED, message: e.message});
    }

}

