import React, { useEffect, useState } from "react";
import socket from "../../model/socket";

function Hall() {
    const [roomList, setRoomList] = useState([]);
    const [roomName, setRoomName] = useState('');
    const [userName, setUserName] = useState('');

    useEffect(() => {
        updateRooms();
    }, []);

    const updateRooms = () => {
        console.log("update rooms");

        socket.on("message", (msg: any) => {
            console.log(msg);
        });
    };

    const createRoom = () => {
        socket.emit('login', userName, roomName, (flag: Boolean) => {
            if (flag) {
                console.log('登陆成功');
            }
        })
    }

    return (
        <div>
            房间列表：
            {roomList.map((room) => {
                <div>room</div>;
            })}
            <input type="text" value={roomName} onChange={e => setRoomName(e.target.value)} name="roomName" />
            <input type="text" value={userName} onChange={e => setUserName(e.target.value)} name="userName" />
            <button onClick={createRoom}>创建房间</button>

        </div>
    );
}

export default Hall;
