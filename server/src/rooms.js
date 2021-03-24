const Room = require('./room');

let roomList = {};

let Rooms = {
    join(roomId, userId, io, socket) {
        if (!roomList.hasOwnProperty(roomId)) {
            roomList[roomId] = new Room(roomId, io, userId)
        }
        roomList[roomId].userJoin(userId, socket);
    },
    sendMsg(roomId, msg) {
        roomList[roomId].sendMsg(msg)
    },
    getRoomS(){
        return roomList;
    }
}

module.exports = Rooms;