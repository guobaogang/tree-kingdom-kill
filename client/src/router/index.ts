import Login from "../page/Login";
import Hall from "../page/Hall";
import Room from "../page/Room";
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
        name: 'Hall',
        auth: true,
        component: Hall
    },
    {
        path: '/room/:id',
        name: 'Room',
        auth: true,
        component: Room
    }
]