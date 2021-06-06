const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/three-kingdom-kill', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});



mongoose.connection.on('connected', function () {
    console.log('DB connected');
});

mongoose.connection.on('error', function (err) {
    console.log('DB connected error:' + err)
});

mongoose.connection.on('disconnected', function () {
    console.log('DB disconnected')
});

const UserSchema = new mongoose.Schema({
    username: {type: String, unique: true},
    password: {
        type: String,
        set(val) {
            return require('bcrypt').hashSync(val, 10)
        }
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = {User}
