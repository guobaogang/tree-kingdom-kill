const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {User} = require('../db/models');
const secretKey = 'sdu2k9nkklsj29kbj472aloop2904';

const authMiddleware = async (req, res, next) => {
    if (req.originalUrl === "/api/user/login" || req.originalUrl === "/api/user/register") {
        next();
        return;
    }
    const token = req.headers.authorization;
    if (!token || token === 'undefined' || token === null) {
        res.status(401).send({
            success: false
        });
        return;
    }
    const {id} = jwt.verify(token, secretKey);
    const user = await User.findById(id);
    if (!user) {
        res.status(401).send({
            success: false
        });
        return;
    }
    req.user = user;
    next()
}

router.use(authMiddleware);

module.exports = router;