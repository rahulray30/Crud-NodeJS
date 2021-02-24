const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    name : {
        type: String,
        required: false
    },

    rollNo : {
        type: Number,
        required: false
    },

    address: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("student", studentSchema);