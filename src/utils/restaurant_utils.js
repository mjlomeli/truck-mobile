import axios from "axios";
import {v4 as uuidv4} from "uuid";

// const url = "https://truck-mobile-backend.herokuapp.com";
const url = "http://localhost:8080";
const params = ['permit', 'name', 'address', 'foodtypes', 'longitude', 'latitude']

const toJSON = (restaurant) => {
    if (!restaurant)
        return '{}';
    if (!restaurant.permit)
        restaurant.permit = uuidv4();
    let filtered = params.reduce((arr, k) => {
        let value = k in restaurant ? restaurant[k] : null;
        return arr.concat([[k, value]])
    }, []);
    return JSON.stringify(Object.fromEntries(filtered));
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