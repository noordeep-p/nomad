import NavBar from "./NavBar";
import HomePage from "./HomePage";
import MyMaps from "./MyMaps";
import NewMap from "./NewMap";
import FavouriteMaps from "./FavouriteMaps";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <NavBar />
      <HomePage />
      <Switch>
        <Route exact path="/mymaps">
          <MyMaps />
        </Route>
        <Route exact path="/favouritemaps">
          <FavouriteMaps />
        </Route>
        <Route exact path="/newmap">
          <NewMap />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
