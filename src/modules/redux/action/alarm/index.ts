import { createAction } from "typesafe-actions";
import { SET_DAY, SET_TIME, SET_TITLE, SET_TYPE } from "./interface";

export const setTitle = createAction(SET_TITLE)<string>();
export const setTime = createAction(SET_TIME)<any>();
export const setDay = createAction(SET_DAY)<[]>();
export const setType = createAction(SET_TYPE)<boolean>();

export type alarmActionType =
    | ReturnType<typeof setTitle>
    | ReturnType<typeof setTime>
    | ReturnType<typeof setDay>
    | ReturnType<typeof setType>;