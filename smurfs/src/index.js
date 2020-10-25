import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {createStore,applyMiddleware} from 'redux';
import { Provider } from "react-redux";
import {myReducer} from './reducers';
import thunck from 'redux-thunk'
import logger from  'redux-logger' 

const store = createStore(myReducer,applyMiddleware(thunck,logger))
console.log('my store in index',store)
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById("root"));
