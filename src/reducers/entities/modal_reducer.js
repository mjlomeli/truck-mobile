
import {
    RECEIVE_MODAL,
    REMOVE_MODAL
} from "../../actions/modal_action";

export const modalReducer = (prevState={}, action) => {
    switch(action.type){
        case RECEIVE_MODAL:
            return {type: action.name, permit: action.permit};
        case REMOVE_MODAL:
            return {};
        default:
            return prevState
    }
}

