import {applyMiddleware} from 'redux';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import rootReducer from './../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


export const store = configureStore({
    reducer: rootReducer,
    preloadedState: {},
    enhancers: [applyMiddleware(thunk, logger)],
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false})
});