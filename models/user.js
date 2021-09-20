const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Name field is required']
    },
    password: {
        type: String,
    },
    adresses,
    email: {
        type: String,
    }
});

const User = mongoose.model('User', UserSchema);
