import {combineReducers} from "redux";
import {all} from "redux-saga/effects";
import {connectRouter} from "connected-react-router";
import {history} from "./index";

import appReducer, {moduleName as appModule} from "./modules/app.module";
import dialogReducer, {moduleName as dialogModule} from "./modules/dialog.module";
import {saga as appSaga} from "./modules/app.module";
import {saga as dialogSaga} from "./modules/dialog.module";

const reducer = combineReducers({
  "router": connectRouter(history),
  [appModule]: appReducer,
  [dialogModule]: dialogReducer
});

function* saga() {
  yield all([
    appSaga(),
    dialogSaga()
  ])
}

export type IRootState = ReturnType<typeof reducer>;
export default {
  reducer,
  saga
}