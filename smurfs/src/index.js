import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {createStore,applyMiddleware} from 'redux';
import { Provider } from "react-redux";
import {myReducer} from './reducers';
import thunck from 'redux-thunk'

const store = createStore(myReducer,applyMiddleware(thunck))

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById("root"));
