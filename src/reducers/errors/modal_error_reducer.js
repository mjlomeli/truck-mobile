import {
    RECEIVE_CREATE_RESTAURANT,
    RECEIVE_MODAL_ERROR,
    RECEIVE_UPDATE_RESTAURANT,
    REMOVE_MODAL
} from "../../actions/modal_action";

export const errorModalReducer = (prevState=[], action) => {
    switch(action.type){
        case RECEIVE_CREATE_RESTAURANT:
        case RECEIVE_UPDATE_RESTAURANT:
        case REMOVE_MODAL:
            return [];
        case RECEIVE_MODAL_ERROR:
            return action.errors
        default:
            return prevState
    }
}