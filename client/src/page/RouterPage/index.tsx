import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import routerList from '../../router';
import {getToken} from "../../utils/util";

function RouterPage() {
    const routerFun = (list: any[]) => {
        return list.map(route => {
            if (route.auth) {
                if (route.children && route.children.length) {

                    return getToken() ? <Route key={route.name} exact={route.exact} path={route.path}>
                            <route.component/>
                            {
                                routerFun(route.children)
                            }
                        </Route> :
                        <Redirect exact={route.exact} to='/login'/>
                } else {
                    return <Route key={route.name} exact={route.exact} path={route.path}
                                  render={() => (getToken() ? <route.component/> :
                                      <Redirect exact={route.exact} to='/login'/>)}/>
                }
            } else {
                return <Route key={route.name} exact={route.exact} path={route.path} render={() => <route.component/>}/>
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