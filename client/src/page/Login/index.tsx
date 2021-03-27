import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import ajax from '../../api/ajax';
import {setUserInfo} from "../../utils/util";

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();

    const login = () => {
        ajax({
            url: '/api/login',
            data: {
                userName,
                password
            }
        })
            .then(res => {
                setUserInfo({
                    name: userName
                })
                history.replace('./home');
            })
            .catch(err => {
                console.log(err)
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
