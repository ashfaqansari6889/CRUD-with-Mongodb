const mongoose = require("mongoose");

const crudSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
}
);


const crudModel = mongoose.model( "crud" , crudSchema );

module.exports = crudModel