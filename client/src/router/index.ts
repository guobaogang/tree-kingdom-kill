import Login from "../page/Login";
import Home from "../page/Home";
import Register from "../page/Register";
import Shares from "../page/Shares";
import Rules from "../page/Rules";
import Manage from "../page/Manage";

export default [
    {
        path: '/',
        name: 'Login',
        redirect: '/login',
        auth: false,
        exact: true,
        component: Login
    }, {
        path: '/login',
        name: 'Login',
        auth: false,
        exact: true,
        component: Login
    }, {
        path: '/register',
        name: 'Register',
        auth: false,
        exact: true,
        component: Register
    },
    {
        path: '/home',
        name: 'home',
        auth: true,
        exact: false,
        component: Home,
        children: [
            {
                path: '/home/shares',
                name: 'Shares',
                auth: true,
                exact: true,
                component: Shares
            },
            {
                path: '/home/rules',
                name: 'Rules',
                auth: true,
                exact: true,
                component: Rules
            },
            {
                path: '/home/manage',
                name: 'Mange',
                auth: true,
                exact: true,
                component: Manage
            }
        ]
    }
]