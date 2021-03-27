class Room {
    /**
     * room构造方法，需要传入roomID，io
     * @param {*} roomId
     * @param {*} io
     */
    constructor(roomId, roomName, createUser) {
        this.roomId = roomId;
        this.roomName = roomName;
        this.createUser = createUser;
        this.io = null;
        this.users = [];
    }

    /**
     * 房间发送消息
     * @param {*} msg 消息对象，包含多种类型的消息，比如用户加入离开，用户发送消息等
     */
    sendMsg(msg) {
        this.io.to(this.roomId).emit('message', msg);
    }

    /**
     * 用户加入房间
     * @param {*} user
     * @param {*} socket
     */
    userJoin(user, io, socket) {
        let roomId = this.roomId;
        this.io = io;
        socket.join(roomId);
        this.users.push(user);
        this.sendMsg({
            type: 'join',
            msg: {
                room: roomId,
                user: user,
                users: this.users
            }
        })
    }
}

module.exports = Room;