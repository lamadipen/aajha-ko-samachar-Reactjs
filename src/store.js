// import rootSaga from './sagas';
// import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
// import { createStore, compose, applyMiddleware } from 'redux';
 import { createStore } from 'redux';



function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

let store = createStore(counter)

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })


/** Saga Middleware */
// const sagaMiddleware = createSagaMiddleWare();

/** create middleware for Redux*/
// let middlewares = applyMiddleware(sagaMiddleware);

/** Create redux store */
// const store = createStore(reducers, compose(middlewares));

/** Run saga watchers*/
// sagaMiddleware.run(rootSaga);

export default store;

//https://medium.com/@shrsujan2007/implementation-of-redux-saga-in-react-applications-973f5a2a87d2

