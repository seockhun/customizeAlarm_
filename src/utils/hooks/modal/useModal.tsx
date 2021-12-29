import { useDispatch } from "react-redux"
import { setInputModal } from "../../../modules/redux/action/modal";
import useSelectState from "../default/useSelectState";

const useModal = () => {
    const dispatch = useDispatch();
    const state = useSelectState();

    const setState = {
        setInputModal: (payload: boolean) => {
            dispatch(setInputModal(payload));
        }
    }
    return{
        state, 
        setState
    }
}

export default useModal;