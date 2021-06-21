import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import ajax from '../../api/ajax';
import {setToken} from "../../utils/util";
import {Button} from "antd";
import './index.less';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();

    const login = () => {
        ajax({
            url: 'api/user/login',
            data: {
                userName,
                password
            }
        })
            .then(res => {
                // @ts-ignore
                setToken(res.token);
                history.replace('./home');
            })
            .catch(err => {
                console.log(err)
            })
    }

    const register = () => {
        history.replace('./register');
    }

    return (
        <div className={'login'}>
            userName: <input value={userName} onChange={e => setUserName(e.target.value)}/>
            passWord: <input value={password} onChange={e => setPassword(e.target.value)}/>
            <Button type={'primary'} onClick={login}>Login</Button>
            <Button onClick={register}>Register</Button>
            <div>
                <ul>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </ul>
            </div>
        </div>
    );
}

export default Login;
