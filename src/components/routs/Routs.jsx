import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../../redux/configureStore";
import Page from "../core/Page";
import { useSelector } from "react-redux";
import BaseScene from "../scenes/BaseScene";
import Nav from "../core/Nav";
import ScrollController from "../core/ScrollController";

const scrollController = new ScrollController();

export default function() {
  const navRoutes = useSelector(state => state.sceneReducer.pages);
  const currentPageIndex = useSelector(
    state => state.sceneReducer.currentPageIndex
  );

  //add listender
  scrollController.addListener();

  //check if animating
  scrollController.updateCanAnimate(currentPageIndex);

  //date
  const date = new Date();

  return (
    <ConnectedRouter history={history}>
      <div style={{ display: "relative", height: "100vh" }}>
        <header className="mainHeader">
          <h1 className="mainTitle">
            <span>Tim D'hoore</span>
          </h1>
          <Nav routes={navRoutes} scrollController={scrollController} />
        </header>
        <main>
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
        </main>
        <footer className="hide">
          Tim D'hoore &copy; {date.getFullYear()}
        </footer>
      </div>
    </ConnectedRouter>
  );
}
