import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import { Dashboard } from "containers";
import { Navbar } from "components";

function AppRouter() {
  return (
      <Switch>    
        /*
        <Route path={"/about"}>
          {"<About />"}
        </Route>
        */
        <Route path={["/dashboard", "/"]}>
          <Dashboard />
        </Route>
      </Switch>
  );
}

export default AppRouter;