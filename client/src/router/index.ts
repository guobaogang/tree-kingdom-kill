import Login from "../page/Login";
import Home from "../page/Home";
import Register from "../page/Register";

export default [
    {
        path: '/',
        name: 'Login',
        redirect: '/login',
        auth: false,
        component: Login
    }, {
        path: '/login',
        name: 'Login',
        auth: false,
        component: Login
    }, {
        path: '/register',
        name: 'Register',
        auth: false,
        component: Register
    },
    {
        path: '/home',
        name: 'home',
        auth: true,
        component: Home
    }
]