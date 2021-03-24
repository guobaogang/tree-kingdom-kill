import React, {useEffect, useState} from "react";
import socket from "../../model/socket";

function Hall() {
    const [roomList, setRoomList] = useState([]);

    useEffect(() => {
        updateRooms();
    }, []);

    const updateRooms = () => {
        console.log("update rooms");
        socket.emit("getRooms", (rooms: any) => {
            console.log(rooms)
            setRoomList(rooms);
        })
        socket.on("message", (msg: any) => {
            console.log(msg);
        });
    };

    return (
        <div>
            房间列表：
            {roomList.map((room) => {
                return <div key={room}>{room}</div>;
            })}
        </div>
    );
}

export default Hall;
