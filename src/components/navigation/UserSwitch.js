import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom"
import Demo from '../Demo';
import Main from '../Main';

import ClientRoutes from './Routes'

const UserSwitch =(props) => {

    return (
        <Switch>
            <Route path={ClientRoutes.User.demo} component={props => <Demo {...props}/>} />
            <Route path={ClientRoutes.User.main} component={props => <Main {...props}/>} />
            {/* <Route path={ClientRoutes.User.leaderboard} component ={props => <Main {...props}/>} /> */}
            <Redirect from="/" to={ClientRoutes.User.main} />
        </Switch>
    )

}

export default UserSwitch;