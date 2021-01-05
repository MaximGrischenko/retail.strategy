import {Record} from "immutable";
import {cloneDeep} from "lodash";
import {createSelector} from "reselect";
import {all, takeEvery} from "redux-saga/effects";

import {IRootState} from "../root.state";
import * as actions from "./action.constants/app.constants";
import {IActionTypes, IStateRecord} from "./module.interfaces/app.interface";

import {changeControlsSaga} from "./action.generators/app.generators";

export const moduleName = "app";

const StateRecord: IStateRecord = {
  loading: false,
  error: undefined
};

const ReducerRecord: Record.Factory<IStateRecord> = Record(cloneDeep(StateRecord));
type RecordType = ReturnType<typeof ReducerRecord>;

export default (state = new ReducerRecord(), action: IActionTypes) => {
  switch (action.type) {
    case actions.CHANGE_CONTROLS_SUCCESS: {
      return state
        .set(action.payload.name, action.payload.value)
    } default: return state;
  }
}

const stateSelector = (state: IRootState): RecordType => state[moduleName];
export const loadingSelector = createSelector(stateSelector, state => state.get("loading"));
export const errorSelector = createSelector(stateSelector, state => state.get("error"));

export const saga = function* () {
  yield all([
    takeEvery(actions.CHANGE_CONTROLS, changeControlsSaga)
  ])
}