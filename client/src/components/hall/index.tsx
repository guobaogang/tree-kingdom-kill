import React, { useEffect, useState } from "react";
import socket from "../../model/socket";

function Hall() {
  const [roomList, setRoomList] = useState([]);

  useEffect(() => {
    updateRooms();
  }, []);

  const updateRooms = () => {
    console.log("update rooms");

    socket.on("message", (msg) => {
      console.log(msg);
    });
  };

  return (
    <div>
      房间列表：
      {roomList.map((room) => {
        <div>room</div>;
      })}
    </div>
  );
}

export default Hall;
