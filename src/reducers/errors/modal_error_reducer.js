import {
    RECEIVE_MODAL_ERROR,
    REMOVE_MODAL,
    RECEIVE_MODAL
} from "../../actions/modal_action";

export const errorModalReducer = (prevState=[], action) => {
    switch(action.type){
        case RECEIVE_MODAL:
        case REMOVE_MODAL:
            return [];
        case RECEIVE_MODAL_ERROR:
            return action.errors
        default:
            return prevState
    }
}