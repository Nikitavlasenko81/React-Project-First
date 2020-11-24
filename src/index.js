import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./Redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import StoreContext from "./storeContext";


function rerenderEntireTree(state) {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App/>
            </React.StrictMode>,
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState());

store.subscribe(()=>{
    let state = store.getState();
    rerenderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
