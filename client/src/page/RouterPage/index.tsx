import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
//import routerList from '../../router';
import {getToken} from "../../utils/util";
import Login from "../Login";
import Hall from "../Hall";

function RouterPage() {
    /*const routerFun = (list: any[]) => {
        let token = getToken();
        return list.map(route => {
            if (route.auth) {
                if (token) {
                    if (route.children) {//路由是否存在子路由
                        /!*return <Route key={route.name} path={route.path} render={() =>
                            <route.component key={route.name}>
                                {routerFun(route.children)}
                                <Route key={route.name} exact path={route.path}
                                       render={() => <Redirect to={route.redirect}/>}/>
                            </route.component>
                        }/>*!/
                    } else {//渲染路由
                        return <Route key={route.name} exact path={route.path} component={route.component}/>
                    }
                } else {
                    return <Redirect exact key={route.name} to='/Login'/>
                }
            } else {
                return <Route key={route.name} exact path={route.path} component={route.component}/>
            }
        })
    }*/

    return (
        <Router>
            <Switch>
                {/*{
                    routerFun(routerList)
                }*/}
                <Route exact path="/login" render={() => <Login/>}/>
                <Route path="/home" render={() => (
                    getToken() ? <Hall/> : <Redirect to={"/login"}/>
                )}/>
            </Switch>
        </Router>
    )
}

export default RouterPage;