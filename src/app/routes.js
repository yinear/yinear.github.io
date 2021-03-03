import {
    Switch,
    Route
  } from "react-router-dom";

import ReactLogo from "../features/react-logo";
import BsComponents from "../features/bs-components";
import Counter from '../features/counter'

const Routes = () => {
    return (
      <div className="BsComponents">
        <Switch>
            <Route exact path="/">
              <Counter />
            </Route>
            <Route path="/bs-components">
              <BsComponents />
            </Route>
            <Route path="/react-logo">
              <ReactLogo />
            </Route>
        </Switch>
      </div>
    );
}

export default Routes;