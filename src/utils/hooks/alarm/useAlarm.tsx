import { useDispatch } from "react-redux"
import useSelectState from "../default/useSelectState";
import { setDay, setType, setTitle, setTime } from "../../../modules/redux/action/alarm";

const useAlarm = () => {
    const dispatch = useDispatch();
    const state = useSelectState();

    const setState = {
        setTitle: (payload: string) => {
            dispatch(setTitle(payload));
        },
        setTime: (payload: any) => {
            dispatch(setTime(payload));
        },
        setDay: (payload: any[]) => {
            dispatch(setDay(payload));
        },
        setType: (payload: boolean) => {
            dispatch(setType(payload));
        }
    }
    return {
        state,
        setState
    }
}

export default useAlarm;