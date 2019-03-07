import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppRouter from './AppRouter';
import createSagaMiddleware from 'redux-saga';

//from Glen's example
import {Provider} from 'react-redux'; // redux bindings for react
import {rootReducer} from './reducers/rootReducers';
import {rootSaga} from './sagas/rootSaga';
import {createStore, applyMiddleware } from "redux";  // to use promises for asynchronous actions


const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));

//run the saga
sagaMiddleware.run(rootSaga);
ReactDOM.render(<Provider store={store}><AppRouter></AppRouter></Provider>, document.getElementById('root'));



//ReactDOM.render(<AppRouter></AppRouter>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
