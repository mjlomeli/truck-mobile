import * as ModalUtil from "./../utils/modal_utils";

export const RECEIVE_MODAL= "RECEIVE_MODAL";
export const REMOVE_MODAL = "REMOVE_MODAL";
export const RECEIVE_MODAL_ERROR = "MODAL_ERROR";


const receiveModal = (name, permit) => ({
    type: RECEIVE_MODAL,
    name,
    permit
})

const removeModal = () => ({
    type: REMOVE_MODAL
})


const receiveModalError = () => ({
    type: RECEIVE_MODAL_ERROR,
    errors: ["Error opening the modal"]
})


export const activateModal = (name, permit) => (dispatch, getState) => {
    return ModalUtil.activateModal(name)
        .then(res => dispatch(receiveModal(name, permit))
    )
};


export const deactivateModal = () => (dispatch) => {
    return dispatch(removeModal())
};


window.ModalAction = {
    activateModal,
    deactivateModal
}