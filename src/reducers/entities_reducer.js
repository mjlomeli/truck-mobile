import {combineReducers} from 'redux';
import restaurants from './entities/restaurant_reducer'
import alert from "./entities/alert_reducer";
import {modalReducer} from "./entities/modal_reducer";

export default combineReducers({
    restaurants,
    alert,
    modal: modalReducer
});
