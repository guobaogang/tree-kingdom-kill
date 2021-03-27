import React, {useEffect, useState} from "react";
import ajax from '../../api/ajax';
import {useHistory} from "react-router-dom";

function Hall() {
    const [roomList, setRoomList] = useState<any>([]);
    let history = useHistory();

    useEffect(() => {
        getRooms();
    }, []);

    const getRooms = () => {
        ajax({
            url: 'api/getRooms'
        }).then(res => {
            // @ts-ignore
            setRoomList(res.data)
        })
    };

    const createRoom = () => {
        ajax({
            url: 'api/createRoom',
            data: {
                name: new Date().getTime()
            }
        }).then(res => {
            // @ts-ignore
            history.push('./room/' + res.data.roomId)
        })
    };

    const joinRoom = (roomId: any) => {
        history.push('./room/' + roomId)
    };

    const renderRooms = () => {
        return roomList.map((room: any) => {
            return <div key={room.roomId}>
                <div>房间名称: {room.roomName}</div>
                <div>房间人数: {room.users.length}</div>
                <button onClick={() => joinRoom(room.roomId)}>加入房间</button>
            </div>
        })
    }

    return (
        <div>
            <button onClick={createRoom}>创建房间</button>
            房间列表：
            {
                renderRooms()
            }
        </div>
    );
}

export default Hall;
