import {
    RECEIVE_RESTAURANT,
    RECEIVE_RESTAURANT_ERROR,
    RESET_RESTAURANT_ERROR,
    RESET_RESTAURANTS_ERROR
} from "../../actions/restaurant_action";

export const errorRestaurant = (prevState = {}, action) => {
    Object.freeze(prevState);
    let newState = Object.assign({}, prevState);
    switch (action.type) {
        case RECEIVE_RESTAURANT_ERROR:
            newState[action.permit] = action.errors;
            return newState;
        case RECEIVE_RESTAURANT:
            delete newState[action.restaurant.permit];
            return newState;
        case RESET_RESTAURANT_ERROR:
            delete newState[action.permit];
            return newState;
        default:
            return prevState;
    }
};


export const errorRestaurants = (prevState = [], action) => {
    Object.freeze(prevState);
    switch (action.type) {
        case RECEIVE_RESTAURANT_ERROR:
            return action.errors;
        case RECEIVE_RESTAURANT:
        case RESET_RESTAURANTS_ERROR:
            return [];
        default:
            return prevState;
    }
};
