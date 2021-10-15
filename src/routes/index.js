import { Switch, Route } from "react-router-dom";
import Group from "../pages/group";
import GroupSearch from "../pages/groupSearch";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Profile from "../pages/profile";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/group">
          <Group />
        </Route>
        <Route path="/group-search">
          <GroupSearch />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
