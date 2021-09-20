const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdressInfoSchema = new Schema({
    street: {
        type: String,
        required: [true, 'The street is required']
    },
    zipcode: {
        required: [true, 'The zpicode is required']
    },
});

const AdressInfo = mongoose.model('AdressInfo', AdressInfoSchema);