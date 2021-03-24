import React, {useState} from "react";
import socket from "../../model/socket";
import {useHistory} from 'react-router-dom';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();
    const login = () => {
        socket.emit('Login', userName, (flag: Boolean) => {
            if (flag) {
                history.replace('./home');
            }
        })
    }

    return (
        <div>
            userName: <input value={userName} onChange={e => setUserName(e.target.value)}/>
            passWord: <input value={password} onChange={e => setPassword(e.target.value)}/>
            <button onClick={login}>Login</button>
        </div>
    );
}

export default Login;
