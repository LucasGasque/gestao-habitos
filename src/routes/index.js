import { Switch, Route } from "react-router-dom";
import Group from "../pages/Group";
import GroupSearch from "../pages/GroupSearch";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import MyGroups from "../pages/MyGroups";

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
        <Route path="/my-groups">
          <MyGroups />
        </Route>
        <Route path="/group/:id">
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
