import * as RestaurantUtil from './../utils/restaurant_utils'
import * as AlertAction from './alert_action'

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";
export const REMOVE_RESTAURANT = "REMOVE_RESTAURANT";


export const RECEIVE_RESTAURANT_ERROR = "RECEIVE_RESTAURANT_ERROR";
export const RECEIVE_RESTAURANTS_ERROR = "RECEIVE_RESTAURANTS_ERROR";
export const RESET_RESTAURANT_ERROR = "RESET_RESTAURANT_ERROR";
export const RESET_RESTAURANTS_ERROR = "RESET_RESTAURANTS_ERROR";

const receiveRestaurants = restaurants =>({
    type: RECEIVE_RESTAURANTS,
    restaurants: restaurants
})

const receiveRestaurant = restaurant =>({
    type: RECEIVE_RESTAURANT,
    restaurant: restaurant
})

const removeRestaurant = restaurantId =>({
    type: REMOVE_RESTAURANT,
    restaurantId: restaurantId
})

const receiveRestaurantError = (restaurantId, errors) =>({
    type: RECEIVE_RESTAURANT_ERROR,
    restaurantId: restaurantId,
    errors: errors
})

export const receiveRestaurantsError = errors =>({
    type: RECEIVE_RESTAURANTS_ERROR,
    errors: errors
})

/*    Separation      */


export const fetchRestaurants = () => dispatch =>(
    RestaurantUtil.fetchRestaurants().then(
        restaurants => dispatch(receiveRestaurants(restaurants)),
        err => {
            dispatch(AlertAction.systemError(err.responseJSON));
            return dispatch(receiveRestaurantError(err.responseJSON))
        }
    )
)

export const fetchRestaurant = restaurantId => (dispatch) => {
    return RestaurantUtil.fetchRestaurant(restaurantId).then(
        restaurant => dispatch(receiveRestaurant(restaurant)),
        err => {
            dispatch(AlertAction.systemError(err.responseJSON));
            return dispatch(receiveRestaurantError(restaurantId, err.responseJSON))
        }
    )
}

export const createRestaurant = restaurant => dispatch =>(
    RestaurantUtil.createRestaurant(restaurant).then(
        restaurant => {
            dispatch(AlertAction.success("Your Restaurant is now public!"));
            dispatch(receiveRestaurant(restaurant))
        },
        err => {
            dispatch(AlertAction.systemError(err.responseJSON));
            return dispatch(receiveRestaurantError(restaurant.id, err.responseJSON))
        }
    )
)

export const updateRestaurant = restaurant => dispatch =>(
    RestaurantUtil.updateRestaurant(restaurant).then(
        restaurant => {
            dispatch(AlertAction.success("Changes has been saved."));
            dispatch(receiveRestaurant(restaurant))
        },
        err => {
            dispatch(AlertAction.systemError(err.responseJSON));
            return dispatch(receiveRestaurantError(restaurant.id, err.responseJSON))
        }
    )
)

export const deleteRestaurant = restaurantId => dispatch =>(
    RestaurantUtil.deleteRestaurant(restaurantId).then(
        restaurant => {
            dispatch(AlertAction.caution("Sorry to see you go! Your restaurant is deleted."));
            dispatch(removeRestaurant(restaurant.id))
        },
        err => {
            dispatch(AlertAction.systemError(err.responseJSON));
            return dispatch(receiveRestaurantError(restaurantId, err.responseJSON))
        }
    )
)

export const resetRestaurantError = restaurantId => dispatch =>(
    dispatch({type: RESET_RESTAURANT_ERROR, restaurantId: restaurantId})
)

export const resetRestaurantsError = () => dispatch =>(
    dispatch({type: RESET_RESTAURANTS_ERROR})
)

window.RestaurantAction = {
    fetchRestaurants,
    fetchRestaurant,
    resetRestaurantsError,
    resetRestaurantError,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
}