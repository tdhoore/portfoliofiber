import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../../redux/configureStore";
import Page from "../core/Page";
import { useSelector } from "react-redux";
import BaseScene from "../scenes/BaseScene";

export default function() {
  const navRoutes = useSelector(state => state.sceneReducer.pages);

  //date
  const date = new Date();

  return (
    <ConnectedRouter history={history}>
      <Switch>
        {navRoutes.map(route => {
          return (
            <Route
              exact
              path={route.url}
              key={route.url}
              component={withRouter(props => (
                <Page {...props} route={route} allRoutes={navRoutes} />
              ))}
            />
          );
        })}
      </Switch>
      <BaseScene />
      <footer className="hide">Tim D'hoore &copy; {date.getFullYear()}</footer>
    </ConnectedRouter>
  );
}
