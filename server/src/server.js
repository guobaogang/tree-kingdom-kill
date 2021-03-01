const express = require('express')
const app = express()
const port = 3000
const httpServer = require("http").createServer(app)
const io = require("socket.io")(httpServer)

let connectedUsers = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

io.on("connection", socket => {
    console.log('a player connected');
    let userName = '';
    socket.on('login', (name, cb) => {
        userName = name;
        connectedUsers.push(name);
        console.log(name + '  login');
        cb(true);
        updateUser();
    });

    function updateUser() {
        io.emit('updateUser', connectedUsers);
    }

    socket.on('disconnect', () => {
        console.log('a player disconnect');
        connectedUsers.splice(connectedUsers.indexOf(userName), 1);
    });
})

httpServer.listen(port, () => console.log(`Example app listening on port port!`))