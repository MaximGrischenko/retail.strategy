import {put} from "redux-saga/effects";
import {
  showDialogContent,
  showDialogContentSuccess,
  dialogChangeSettings,
  dialogChangeSettingsSuccess
} from "../action.creators/dialog.actions";

export const showDialogContentSaga = function* (payload: ReturnType<typeof showDialogContent>) {
  yield put(showDialogContentSuccess(payload.content));
};

export const dialogChangeSettingsSaga = function* (payload: ReturnType<typeof dialogChangeSettings>) {
  yield put(dialogChangeSettingsSuccess(payload.settings));
};