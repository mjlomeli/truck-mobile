

export const fetchRestaurants = () => {
    return fetch("https://truck-mobile-backend.herokuapp.com/restaurant")
        .then(res => res.json())
        .catch(err => null)
}

export const fetchRestaurant = (permit) => {
    return fetch("https://truck-mobile-backend.herokuapp.com/restaurant")
        .then(res => res.json())
        .catch(err => null)
}

export const createRestaurant = (restaurant) => {
    return fetch("https://truck-mobile-backend.herokuapp.com/restaurant")
        .then(res => res.json())
        .catch(err => null)
}

export const updateRestaurant = (restaurant) => {
    return fetch("https://truck-mobile-backend.herokuapp.com/restaurant")
        .then(res => res.json())
        .catch(err => null)
}

export const deleteRestaurant = (permit) => {
    return fetch("https://truck-mobile-backend.herokuapp.com/restaurant")
        .then(res => res.json())
        .catch(err => null)
}


window.RestaurantUtils = {
    fetchRestaurants,
    fetchRestaurant,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant

}