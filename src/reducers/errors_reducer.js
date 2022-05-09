import { combineReducers } from 'redux';

import {errorRestaurants, errorRestaurant} from "./errors/restaurant_error_reducer";

export default combineReducers({
  restaurants: errorRestaurants,
  restaurant: errorRestaurant,
});
