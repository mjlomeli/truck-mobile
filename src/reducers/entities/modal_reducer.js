
import {
    RECEIVE_CREATE_RESTAURANT,
    RECEIVE_UPDATE_RESTAURANT,
    REMOVE_MODAL
} from "../../actions/modal_action";

export const modalReducer = (prevState={}, action) => {
    switch(action.type){
        case RECEIVE_CREATE_RESTAURANT:
            return {type: "create"};
        case RECEIVE_UPDATE_RESTAURANT:
            return {type: "update"};
        case REMOVE_MODAL:
            return {};
        default:
            return prevState
    }
}

