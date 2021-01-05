import {createBrowserHistory} from "history";
import createSagaMiddleware from "redux-saga";
import {routerMiddleware as createRouterMiddleware} from "react-router-redux";
import {applyMiddleware, compose, createStore} from "redux";

import state from "./root.state";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const routerMiddleware = createRouterMiddleware(history);
const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  applyMiddleware(routerMiddleware)
);

const store = createStore(state.reducer, enhancer);
sagaMiddleware.run(state.saga);

//store subscription for development mode
process.env.NODE_ENV === "development" && (
  store.subscribe(() => {
    //@ts-ignore
    window.store = store.getState()
  })
);

export default store;