import {applyMiddleware} from 'redux';
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


export const store = configureStore({
    reducer: rootReducer,
    preloadedState: {},
    enhancers: applyMiddleware(thunk, logger)
});

    // if (test)
    //     return createStore(rootReducer, preloadedState, );
    // else
    //     return createStore(rootReducer, preloadedState, applyMiddleware(thunk));