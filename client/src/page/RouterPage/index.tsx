import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "../Login";
import Hall from "../Hall";
import Room from "../Room";

function RouterPage() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/home" component={Hall}/>
                <Route path="/room/:id" component={Room}/>
            </Switch>
        </Router>
    )
}

export default RouterPage;