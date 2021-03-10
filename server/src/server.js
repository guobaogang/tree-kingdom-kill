const express = require('express');
const app = express();
const port = 3000;
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, { cors: true });
const Rooms = require('./rooms');

//所有已登录用户
let connectedUsers = {};

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

//socket连接
io.on("connection", socket => {
    //updateUser();
    let userName = '';
    let roomName = '';
    //用户登录
    socket.on('login', (name, room, cb) => {
        /* userName = name;
        roomName = room;
        socket.join(roomName);
        console.log(userName + "加入连接房间" + roomName);
        connectedUsers[roomName] ? connectedUsers[roomName].push(userName) :
            connectedUsers[roomName] = [userName];
        cb(true);
        updateUser(); */
        Rooms.join(room, name, io, socket);
    });

    //广播更新用户列表
    function updateUser() {
        io.to(roomName).emit('updateUser', connectedUsers[roomName]);
    };

    //断开socket连接
    socket.on('disconnect', () => {
        console.log(userName + "断开连接");
        if (!connectedUsers[roomName]) return;
        let index = connectedUsers[roomName].indexOf(userName);
        if (index > -1) {
            connectedUsers[roomName].splice(index, 1);
            updateUser();
        }
    });
})

httpServer.listen(port, () => console.log(`Example app listening on port port!`))