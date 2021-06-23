import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import ajax from '../../api/ajax';
import {setToken} from "../../utils/util";
import './index.less';
import {Form, Input, Button, Checkbox} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';

function Login() {
    let history = useHistory();

    const register = () => {
        history.replace('./register');
    }

    const onFinish = (values: any) => {
        const {username, password} = values;
        ajax({
            url: 'api/user/login',
            data: {
                userName: username,
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

    return (
        <div className={'login-box-warp'}>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{remember: true}}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{required: true, message: 'Please input your Username!'}]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{required: true, message: 'Please input your Password!'}]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a onClick={() => register()}>register now!</a>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;
