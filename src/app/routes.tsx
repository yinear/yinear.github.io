import {
    Switch,
    Route
  } from "react-router-dom";

import Counter from '../features/counter'
import ReactLogo from "../features/react-logo";
import BsComponents from "../features/bs-components";

const Routes = () => {
    return (
      <div className="BsComponents">
        <Switch>
            <Route exact path="/" component={Counter}>
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