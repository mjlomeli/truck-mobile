
import {
    SORT_ADDRESS,
    SORT_NAME
} from "../../actions/side_effect_action";

import {
    RECEIVE_RESTAURANTS,
    RECEIVE_RESTAURANT,
    REMOVE_RESTAURANT
} from "../../actions/restaurant_action";


const comparator = (key) => (left, right) => {
    return left[key].toLowerCase().localeCompare(right[key].toLowerCase())
}

export default function sideEffectReducer(prevState=[], action){
    let newState = [...prevState];
    switch(action.type){
        case SORT_NAME:
            return newState.sort(comparator('name'));
        case SORT_ADDRESS:
            return newState.sort(comparator('address'));
        case RECEIVE_RESTAURANTS:
            return Object.values(action.restaurants);
        case RECEIVE_RESTAURANT:
            newState.push(action.restaurant);
            return newState;
        case REMOVE_RESTAURANT:
            return newState.filter(restaurant => restaurant.permit !== action.permit);
        default:
            return newState
    }
}

