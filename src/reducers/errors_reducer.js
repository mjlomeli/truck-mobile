import { combineReducers } from 'redux';

import {errorRestaurants, errorRestaurant} from "./errors/restaurant_error_reducer";
import {errorModalReducer} from "./errors/modal_error_reducer";

export default combineReducers({
  restaurants: errorRestaurants,
  restaurant: errorRestaurant,
  modal: errorModalReducer
});
