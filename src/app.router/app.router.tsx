import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {Redirect, Route, Switch} from "react-router-dom";
import {AppRoutes} from "./router.constants";
import {ProtectedRoute} from "./protected.route";

export const AppRouter: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <Switch>
      <Route path={AppRoutes.AUTHORIZATION} component={() => <div>Authorization</div>} />
      <Route path={AppRoutes.VIEWER} component={() => <div>Viewer</div>} />
      <ProtectedRoute path={AppRoutes.protected.COLLECTION}>
        <div>Collection</div>
      </ProtectedRoute>
      <ProtectedRoute path={AppRoutes.protected.EDITOR}>
        <div>Editor</div>
      </ProtectedRoute>
    </Switch>
  )
}