import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../../redux/configureStore";
import Page from "../core/Page";

export default function() {
  const navRoutes = [
    {
      title: "Home",
      url: "/"
    },
    {
      title: "Work",
      url: "/work"
    },
    {
      title: "About",
      url: "/about"
    }
  ];

  return (
    <ConnectedRouter history={history}>
      <Switch>
        {navRoutes.map(route => {
          return (
            <Route
              exact
              path={route.url}
              key={route.url}
              component={props => (
                <Page {...props} route={route} allRoutes={navRoutes} />
              )}
            />
          );
        })}
      </Switch>
    </ConnectedRouter>
  );
}
