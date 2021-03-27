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
        return roomList.map(room => {
            return {
                roomId: room.roomId,
                roomName: room.roomName,
                users: room.users || []
            }
        });
    }
}

module.exports = Rooms;