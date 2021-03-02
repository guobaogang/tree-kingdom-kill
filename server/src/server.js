const express = require('express')
const app = express()
const port = 3000
const httpServer = require("http").createServer(app)
const io = require("socket.io")(httpServer)

//所有已登录用户
let connectedUsers = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

//socket连接
io.on("connection", socket => {
    updateUser();
    let userName = '';
    //用户登录
    socket.on('login', (name, cb) => {
        userName = name;
        console.log(userName + "加入连接")
        connectedUsers.push(name);
        cb(true);
        updateUser();
    });

    //广播更新用户列表
    function updateUser() {
        io.emit('updateUser', connectedUsers);
    }

    //断开socket连接
    socket.on('disconnect', () => {
        console.log(userName + "断开连接")
        let index = connectedUsers.indexOf(userName);
        if (index > -1) {
            connectedUsers.splice(index, 1);
            updateUser();
        }
    });
})

httpServer.listen(port, () => console.log(`Example app listening on port port!`))