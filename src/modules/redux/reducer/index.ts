import { combineReducers } from "redux";
import AlarmReducer from "./alarm";
import ModalReducer from "./modal";


const rootReducer = combineReducers({
    modal: ModalReducer,
    alarm: AlarmReducer,
});

export type reducerType =
    ReturnType<typeof rootReducer>;

export default rootReducer;