import {combineReducers} from 'redux';
import restaurants from './entities/restaurant_reducer'
import alert from "./entities/alert_reducer";
import {modalReducer} from "./entities/modal_reducer";
import sideEffectReducer from "./entities/side_effect_reducer";

export default combineReducers({
    restaurants,
    alert,
    modal: modalReducer,
    effects: sideEffectReducer
});
