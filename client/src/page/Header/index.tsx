import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import './index.less';
import {Menu} from 'antd';
import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
import {removeToken} from "../../utils/util";

const {SubMenu} = Menu;

function Header() {
    const [current, setCurrent] = useState('mail')

    let history = useHistory();

    const register = () => {
        history.replace('./register');
    }

    const handleClick = (e: any) => {
        history.replace('/home/' + e.key);
    }

    const logOut = () => {
        removeToken();
        history.replace('/login');
    }

    return (
        <div className={'header'}>
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="stocks" icon={<MailOutlined/>}>
                    我的股票
                </Menu.Item>
                <Menu.Item key="rules" icon={<AppstoreOutlined/>}>
                    提示规则
                </Menu.Item>
                <Menu.Item key="manage" icon={<SettingOutlined/>}>
                    管理
                </Menu.Item>
                <SubMenu key="SubMenu" icon={<SettingOutlined/>} title="设置">
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
            </Menu>
            <div className={'log-out'} onClick={logOut}>
                退出
            </div>
        </div>
    );
}

export default Header;
