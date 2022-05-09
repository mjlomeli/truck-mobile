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

const removeRestaurant = permit =>({
    type: REMOVE_RESTAURANT,
    permit: permit
})

const receiveRestaurantError = (permit, errors) =>({
    type: RECEIVE_RESTAURANT_ERROR,
    permit: permit,
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
            //dispatch(AlertAction.systemError(err));
            return dispatch(receiveRestaurantError(err))
        }
    )
)

export const fetchRestaurant = permit => (dispatch) => {
    return RestaurantUtil.fetchRestaurant(permit).then(
        restaurant => dispatch(receiveRestaurant(restaurant)),
        err => {
            dispatch(AlertAction.systemError(err));
            return dispatch(receiveRestaurantError(permit, err))
        }
    )
}

export const createRestaurant = restaurant => dispatch =>(
    RestaurantUtil.createRestaurant(restaurant).then(
        restaurant => {
            //dispatch(AlertAction.success("Your Restaurant is now public!"));
            dispatch(receiveRestaurant(restaurant))
        },
        err => {
            //dispatch(AlertAction.systemError(err));
            return dispatch(receiveRestaurantError(restaurant.permit, err))
        }
    )
)

export const updateRestaurant = restaurant => dispatch =>(
    RestaurantUtil.updateRestaurant(restaurant).then(
        restaurant => {
            //dispatch(AlertAction.success("Changes has been saved."));
            dispatch(receiveRestaurant(restaurant))
        },
        err => {
            //dispatch(AlertAction.systemError(err));
            return dispatch(receiveRestaurantError(restaurant.permit, err))
        }
    )
)

export const deleteRestaurant = permit => dispatch =>(
    RestaurantUtil.deleteRestaurant(permit).then(
        restaurant => {
            //dispatch(AlertAction.caution("Sorry to see you go! Your restaurant is deleted."));
            dispatch(removeRestaurant(restaurant.permit))
        },
        err => {
            //dispatch(AlertAction.systemError(err.responseJSON));
            return dispatch(receiveRestaurantError(permit, err))
        }
    )
)

export const resetRestaurantError = permit => dispatch =>(
    dispatch({type: RESET_RESTAURANT_ERROR, permit: permit})
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
    deleteRestaurant,
    example: () => fetchRestaurants()(window.store.dispatch).then(() => window.store.getState())
}