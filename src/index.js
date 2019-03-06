import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppRouter from './AppRouter';
//import thunk from "redux-thunk";
//import {Provider} from 'react-redux'; // redux bindings for react
//import {createStore, applyMiddleware, compose} from "redux";  // to use promises for asynchronous actions
//import reducers from './reducers';
// const middleware = [thunk];
// const store = createStore(reducers, {}, compose(applyMiddleware(...middleware)));

ReactDOM.render(<AppRouter></AppRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
