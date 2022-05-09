import axios from "axios";

let url = "https://truck-mobile-backend.herokuapp.com";
url = "http://localhost:8080"

const toJSON = (restaurant) => {
    let data = {
        permit: null,
        name: null,
        address: null,
        foodtypes: null,
        longitude: null,
        latitude: null,
        ...restaurant
    }
    return JSON.stringify(data);
}


export const fetchRestaurants = () => {
    return axios.get(`${url}/restaurant`)
        .then(resp => resp.data)
        .catch(error => error.message)
}

export const fetchRestaurant = (permit) => {
    return axios.get(`${url}/restaurant/${permit}`)
        .then(res => res.data)
        .catch(error => error.message)
}

export const createRestaurant = (restaurant) => {
    let data = toJSON(restaurant);
    return axios.post(`${url}/restaurant`, data, {headers: {'Content-Type': 'application/json'}})
        .then(res => res.data)
        .catch(error => error.message)
}

export const updateRestaurant = (permit, restaurant) => {
    let data = toJSON(restaurant);
    return axios.patch(`${url}/restaurant/${permit}`, data,{headers: {'Content-Type': 'application/json'}})
        .then(res => res.data)
        .catch(error => error.message)
}

export const deleteRestaurant = (permit) => {
    return axios.delete(`${url}/restaurant/${permit}`)
        .then(res => res.data)
        .catch(error => error.message)
}


window.RestaurantUtils = {
    fetchRestaurants,
    fetchRestaurant,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
}