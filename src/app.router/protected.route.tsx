import React from "react";
import {useSelector} from "react-redux";
import {Redirect, Route, RouteProps} from "react-router-dom";
import {Grid} from "@material-ui/core";
import {AppRoutes} from "./router.constants";

export const ProtectedRoute: React.FC<RouteProps> = ({children, ...rest}) => {
  // const authorization = useSelector(authorizationSelector);
  const authorization = true;
  return (
    <Route
      {...rest}
      render={({location}) => (
        authorization ? (
          <Grid container>
            {children}
          </Grid>
        ) : (
          <Redirect to={{pathname: AppRoutes.AUTHORIZATION, state: {from: location}}} />
        )
      )}
    />
  )
}