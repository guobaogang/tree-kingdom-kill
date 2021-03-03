class room {
    /**
     * room构造方法，需要传入roomID，io，创建room 的user默认加入
     * @param {*} roomId 
     * @param {*} io 
     * @param {*} user 
     */
    constructor(roomId, io, user) {
        this.roomId = roomId;
        this.io = io;
        this.users = [user];
    }

    /**
     * 房间发送消息
     * @param {*} msg 消息对象，包含多种类型的消息，比如用户加入离开，用户发送消息等
     */
    sendMsg(msg){
        this.io.to(this.roomId).emit('msg', msg);
    }

    /**
     * 用户加入房间
     * @param {*} user 
     * @param {*} socket 
     */
    userJoin(user, socket){
        let roomId = this.roomId;
        socket.join(roomId);
        this.users.push(user);
        this.sendMsg({
            type: 'join',
            msg: {
                user: user
            }
        })
    }
}