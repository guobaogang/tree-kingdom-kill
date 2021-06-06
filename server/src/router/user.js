const router = require('./router');
const Rooms = require('../rooms');
const jwt = require('jsonwebtoken');
const {User} = require('../db/models');
const secretKey = 'sdu2k9nkklsj29kbj472aloop2904';


router.post('/register', async (req, res) => {
    const {userName, password} = req.body.busiParam;
    const user = await User.create({
        username: userName,
        password: password
    })
    res.send({
        user,
        success: true
    })
})

router.post('/login', async (req, res) => {
    const {userName, password} = req.body.busiParam;
    const user = await User.findOne({
        username: userName
    })
    if (!user) {
        return res.status(422).send({
            success: false,
            message: '用户名不存在'
        })
    }

    const isPasswordValid = require('bcrypt').compareSync(password, user.password);

    if (!isPasswordValid) {
        return res.status(422).send({
            success: false,
            message: '密码不正确'
        })
    }

    //生成token
    const token = jwt.sign({
        id: String(user._id)
    }, secretKey)

    res.send({
        token,
        success: true
    })
});

router.post('/getRooms', async (req, res) => {
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