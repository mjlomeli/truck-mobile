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
            action.restaurants.forEach(restaurant =>{
                restaurant.id = parseInt(restaurant.id);
                newState[restaurant.id] = restaurant;
            })
            return newState;
        case RECEIVE_RESTAURANT:
            action.restaurant.id = parseInt(action.restaurant.id);
            newState[action.restaurant.id] = action.restaurant;
            return newState;
        case REMOVE_RESTAURANT:
            delete newState[parseInt(action.restaurantId)]
            return newState;
        default:
            return prevState
    }
}