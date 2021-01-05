import * as actions from "../action.constants/app.constants";
import {IStateRecord} from "../module.interfaces/app.interface";

export const changeControls = (payload: {name: keyof IStateRecord, value: any}): {type: typeof actions.CHANGE_CONTROLS, payload: {name: keyof IStateRecord, value: any}} => ({
  type: actions.CHANGE_CONTROLS,
  payload
});
export const changeControlsSuccess = (payload: {name: keyof IStateRecord, value: any}): {type: typeof actions.CHANGE_CONTROLS_SUCCESS, payload: {name: keyof IStateRecord, value: any}} => ({
  type: actions.CHANGE_CONTROLS_SUCCESS,
  payload
});