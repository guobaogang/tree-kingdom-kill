import React, {useState} from "react";
import './index.less';
import {Layout} from 'antd';
import Header from "../Header";

const {Content} = Layout;

function Home() {
    return (
        <Layout>
            <Header/>
            <Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>
                <div className="site-layout-background" style={{padding: 24, minHeight: 380}}>
                    Content
                </div>
            </Content>
        </Layout>
    );
}

export default Home;
