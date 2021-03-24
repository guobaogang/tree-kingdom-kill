import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from "../Login";
import Hall from "../Hall";

function RouterPage() {
    return (
        <Router>
            <div>
                <Route path="/" exact component={Login}/>
                <Route path="/home" component={Hall}/>
            </div>
        </Router>
    )
}

export default RouterPage;