import BackDrop from "components/BackDrop/BackDrop";
import Dashboard from "containers/Dashboard/Dashboard";
import { createBrowserHistory } from "history";
import React, { Suspense } from "react";
import { Route, Router, Switch } from "react-router";
import ResponsiveDrawer from "components/ResponsiveDrawer/ResponsiveDrawer";
import UIComponent from "containers/UIComponent";
import Form from "containers/UIComponent/Form";

export const browserHistory = createBrowserHistory();
const App = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <ResponsiveDrawer>
          <Route exact path="/">
            <Suspense fallback={<BackDrop />}>
              <Dashboard />
            </Suspense>
          </Route>
          <Route exact path="/dashboard">
            <Suspense fallback={<BackDrop />}>
              <Dashboard />
            </Suspense>
          </Route>
          <Route exact path="/component">
            <Suspense fallback={<BackDrop />}>
              <UIComponent />
            </Suspense>
          </Route>
          <Route exact path="/component/form">
            <Suspense fallback={<BackDrop />}>
              <Form />
            </Suspense>
          </Route>
        </ResponsiveDrawer>
      </Switch>
    </Router>
  );
};
export default App;
