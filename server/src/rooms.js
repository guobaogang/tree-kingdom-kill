const Room = require('./room');

let roomList = {};

let Rooms = {
    create({roomId, roomName, createUser}) {
        roomList[roomId] = new Room(roomId, roomName, createUser)
    },
    join(roomId, userId, io, socket) {
        roomList[roomId].userJoin(userId, io, socket);
    },
    sendMsg(roomId, msg) {
        roomList[roomId].sendMsg(msg)
    },
    getRoomS() {
        return Object.keys(roomList).map(key=>{
            return {
                roomId: roomList[key].roomId,
                roomName: roomList[key].roomName,
                users: roomList[key].users
            }
        })
    }
}

module.exports = Rooms;