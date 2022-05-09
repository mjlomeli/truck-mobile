

export const fetchRestaurants = () => {
    return fetch("https://truck-mobile-backend.herokuapp.com/restaurant")
        .then(res => res.json())
        .catch(err => null)
}

