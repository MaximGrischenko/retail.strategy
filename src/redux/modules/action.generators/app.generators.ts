import {put} from "redux-saga/effects";
import {changeControls, changeControlsSuccess} from "../action.creators/app.actions";

export const changeControlsSaga = function* ({payload}: ReturnType<typeof changeControls>) {
  yield put(changeControlsSuccess({...payload}))
}