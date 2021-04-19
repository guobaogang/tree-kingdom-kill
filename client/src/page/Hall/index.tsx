import React, {useEffect, useState} from "react";
import ajax from '../../api/ajax';
import {useHistory} from "react-router-dom";
import './index.less';

function Hall() {
    const [roomList, setRoomList] = useState<any>([]);
    let history = useHistory();

    useEffect(() => {
        getRooms();
    }, []);

    const getRooms = () => {
        ajax({
            url: 'api/user/getRooms'
        }).then(res => {
            // @ts-ignore
            setRoomList(res.data)
        })
    };

    const createRoom = () => {
        ajax({
            url: 'api/user/createRoom',
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
            return <div key={room.roomId} className="room">
                <div>房间名称: {room.roomName}</div>
                <div>房间人数: {room.users.length}</div>
                <button onClick={() => joinRoom(room.roomId)}>加入房间</button>
            </div>
        })
    }

    return (
        <div className="hall">
            <button onClick={createRoom}>创建房间</button>
            房间列表：
            <div className="room-list">
                {
                    renderRooms()
                }
            </div>
        </div>
    );
}

export default Hall;
