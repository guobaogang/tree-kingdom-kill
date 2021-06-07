import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import ajax from '../../api/ajax';

function Register() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();

    const register = () => {
        ajax({
            url: 'api/user/register',
            data: {
                userName,
                password
            }
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const login = () => {
        history.replace('./login')
    }

    return (
        <div>
            userName: <input value={userName} onChange={e => setUserName(e.target.value)}/>
            passWord: <input value={password} onChange={e => setPassword(e.target.value)}/>
            <button onClick={register}>Register</button>
            <button onClick={login}>Login</button>
        </div>
    );
}

export default Register;
