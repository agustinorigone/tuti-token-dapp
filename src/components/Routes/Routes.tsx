import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

import { locations } from "../../modules/routing/locations";
import { App } from "../App";
import { Burn } from "../Burn";
import { Mint } from "../Mint";
import { Transfer } from "../Transfer";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={locations.root()} component={App} />
        <Route exact path={locations.burn()} component={Burn} />
        <Route exact path={locations.transfer()} component={Transfer} />
        <Route exact path={locations.mint()} component={Mint} />
        <Redirect to={locations.root()} />
      </Switch>
    </Router>
  );
};

export default Routes;
