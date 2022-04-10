import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Demo from "../Demo";
import Main from "../Main";
import Game from "../Game";
import ClientRoutes from "./Routes";
import Leaderboard from "../Leaderboard";

const UserSwitch = (props) => {
  return (
    <Switch>
      <Route
        path={ClientRoutes.User.main}
        component={(props) => <Main {...props} />}
      />
      <Route
        path={ClientRoutes.User.game}
        component={(props) => <Game {...props} />}
      />
      <Route
        path={ClientRoutes.User.demo}
        component={(props) => <Demo {...props} />}
      />
      <Route
        path={ClientRoutes.User.leaderboard}
        component={(props) => <Leaderboard {...props} />}
      />
      {/* <Route path={ClientRoutes.User.leaderboard} component ={props => <Main {...props}/>} /> */}
      <Redirect from="/" to={ClientRoutes.User.main} />
    </Switch>
  );
};

export default UserSwitch;
