import { createAction } from "typesafe-actions";
import { SET_INPUT_MODAL } from "./interface";

export const setInputModal = createAction(SET_INPUT_MODAL)<boolean>();

export type modalActionType =
    | ReturnType<typeof setInputModal>;