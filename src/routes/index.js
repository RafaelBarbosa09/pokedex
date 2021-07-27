import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import PokeProfile from "../pages/PokeProfile";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/pokeprofile/:pokemon+" component={PokeProfile} />
    </Switch>
  );
}