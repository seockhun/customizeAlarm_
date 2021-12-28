import { alarmActionType } from "../../action/alarm";
import { SET_DAY, SET_TIME, SET_TITLE, SET_TYPE } from "../../action/alarm/interface";
import AlarmState from "./interface";

const initState: AlarmState = {
    title: "",
    time: new Date(1598052150000),
    day: [],
    type: false
};

const AlarmReducer = (
    state = initState,
    action: alarmActionType
) => {
    switch (action.type) {
        case SET_TITLE:
            return {
                ...state,
                title: action.payload
            }
        case SET_TIME:
            return {
                ...state,
                time: action.payload
            }
        case SET_DAY:
            return {
                ...state,
                day: action.payload
            }
        case SET_TYPE:
            return {
                ...state,
                type: action.payload
            }
        default:
            return state;
    }
}

export default AlarmReducer;