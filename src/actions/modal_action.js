import * as ModalUtil from "./../utils/modal_utils";

export const RECEIVE_CREATE_RESTAURANT = "RECEIVE_CREATE_RESTAURANT";
export const RECEIVE_UPDATE_RESTAURANT = "RECEIVE_UPDATE_RESTAURANT";
export const REMOVE_MODAL = "REMOVE_MODAL";
export const RECEIVE_MODAL_ERROR = "MODAL_ERROR";


const receiveCreateRestaurant = () => ({
    type: RECEIVE_CREATE_RESTAURANT
})

const receiveUpdateRestaurant = () => ({
    type: RECEIVE_UPDATE_RESTAURANT
})

const removeModal = () => ({
    type: REMOVE_MODAL
})


const receiveModalError = () => ({
    type: RECEIVE_MODAL_ERROR,
    errors: ["Error opening the modal"]
})


export const createRestaurant = () => (dispatch, getState) => {
    return ModalUtil.createRestaurant(getState()).then(
        res => dispatch(receiveCreateRestaurant()),
        error => dispatch(receiveModalError())
    )};

export const updateRestaurant = () => (dispatch, getState) => {
    return ModalUtil.updateRestaurant(getState()).then(
        res => dispatch(receiveUpdateRestaurant()),
        error => dispatch(receiveModalError())
    )};


export const deleteModal = () => (dispatch) => {
    return dispatch(removeModal())
};


window.ModalAction = {
    updateRestaurant,
    createRestaurant,
    deleteModal
}