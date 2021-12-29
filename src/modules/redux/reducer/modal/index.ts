import { modalActionType } from "../../action/modal";
import { SET_INPUT_MODAL } from "../../action/modal/interface";
import ModalState from "./interface";

const initState: ModalState = {
    inputModalState: false
};

const ModalReducer = (
    state = initState,
    action: modalActionType
) => {
    switch (action.type) {
        case SET_INPUT_MODAL:
            return {
                ...state,
                inputModalState: action.payload
            }
        default:
            return state;
    }
}

export default ModalReducer;