import {
    RECEIVE_RESTAURANT,
    REMOVE_RESTAURANT,
    RECEIVE_RESTAURANTS
} from "../../actions/restaurant_action";

export default function RestaurantReducer(prevState={}, action){
    Object.freeze(prevState);
    let newState = Object.assign({}, prevState) // this isn't a deep copy
    switch(action.type){
        case RECEIVE_RESTAURANTS:
            if (!action.restaurants)
                return prevState;
            action.restaurants.forEach(restaurant =>{
                newState[restaurant.permit] = restaurant;
            })
            return newState;
        case RECEIVE_RESTAURANT:
            if (!action.restaurant)
                return prevState;
            newState[action.restaurant.permit] = action.restaurant;
            return newState;
        case REMOVE_RESTAURANT:
            if (!action.permit)
                return prevState;
            delete newState[action.permit]
            return newState;
        default:
            return prevState
    }
}