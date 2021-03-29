const express = require('express');
const router = express.Router();
const Rooms = require('../rooms');

router.post('/login', (req, res) => {
    const {userName, password} = req.body.busiParam;

    res.send({
        success: true
    })
});

router.post('/getRooms', (req, res) => {
    const rooms = Rooms.getRoomS();
    res.send({
        success: true,
        data: rooms
    })
});

router.post('/createRoom', (req, res) => {
    const {
        busiParam:
            {
                name
            },
        sysParam: {
            user
        }
    } = req.body;
    Rooms.create({
        roomName: name,
        roomId: name,
        createUser: user
    });
    res.send({
        success: true,
        data: {
            roomId: name
        }
    })
});

module.exports = router;