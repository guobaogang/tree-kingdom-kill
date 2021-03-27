import React, {useEffect, useState} from "react";
import socket from "../../model/socket";
import {getUserInfo} from "../../utils/util";

function Room(props: any) {

    useEffect(() => {
        joinRoom();
    }, []);

    const joinRoom = () => {
        let userInfo = getUserInfo();
        let roomId = props.match.params.id;
        socket.emit("joinRoom", {
            userName: userInfo && userInfo.name,
            roomId: roomId
        }, (msg: any) => {
            console.log(msg)
        })
        socket.on("message", (msg: any) => {
            console.log(msg);
        });
    }

    return (
        <div>
        </div>
    );
}

export default Room;
