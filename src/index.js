import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import {store} from "./store/store";
import App from './App';

const Root = ({store}) => (
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>
);

document.addEventListener("DOMContentLoaded", () => {
    const rootElement = document.getElementById("root");
    const root = ReactDOM.createRoot(rootElement);
    window.store = store;
    root.render(<Root store={store}/>);
});