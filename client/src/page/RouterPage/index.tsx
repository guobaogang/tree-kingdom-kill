import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import routerList from '../../router';
import {getToken} from "../../utils/util";

function RouterPage() {
    const routerFun = (list: any[]) => {
        return list.map(route => {
            if (route.auth) {
                return <Route key={route.name} exact path={route.path}
                              render={() => (getToken() ? <route.component/> :
                                  <Redirect exact to='/login'/>)}/>
            } else {
                return <Route key={route.name} exact path={route.path} render={() => <route.component/>}/>
            }
        })
    }

    return (
        <Router>
            <Switch>
                {
                    routerFun(routerList)
                }
            </Switch>
        </Router>
    )
}

export default RouterPage;