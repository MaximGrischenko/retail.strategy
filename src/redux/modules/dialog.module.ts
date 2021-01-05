import {Record} from "immutable";
import {cloneDeep} from "lodash";
import {createSelector} from "reselect";
import {all, takeEvery} from "redux-saga/effects";

import {IRootState} from "../root.state";
import * as actions from "./action.constants/dialog.constants";
import {IActionTypes, IStateRecord} from "./module.interfaces/dialog.interface";
import {dialogChangeSettingsSaga, showDialogContentSaga} from "./action.generators/dialog.generators";

export const moduleName = "dialog";

const StateRecord: IStateRecord = {
  content: undefined
};

const ReducerRecord: Record.Factory<IStateRecord> = Record(cloneDeep(StateRecord));
type RecordType = ReturnType<typeof ReducerRecord>;

export default (state = new ReducerRecord(), action: IActionTypes) => {
  switch (action.type) {
    case actions.SHOW_DIALOG_CONTENT_SUCCESS: {
      return state
        .set("content", action.content)
    }
    case actions.DIALOG_CHANGE_SETTINGS_SUCCESS: {
      return state
        .setIn(["content, settings"], action.settings)
    } default: return state;
  }
}

const stateSelector = (state: IRootState): RecordType => state[moduleName];
export const contentSelector = createSelector(stateSelector, state => state.get("content"));
export const settingsSelector = createSelector(stateSelector, state => state.getIn(["content", "settings"]));

export const saga = function* () {
  yield all([
    takeEvery(actions.SHOW_DIALOG_CONTENT, showDialogContentSaga),
    takeEvery(actions.DIALOG_CHANGE_SETTINGS, dialogChangeSettingsSaga)
  ])
}
