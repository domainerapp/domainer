const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        max: 50,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
    },
    role: {
        type: String,
        required: true
    },
    subdomainsCount: {
        type: Number,
        required: true
    }
})

const model = mongoose.model("users", userSchema)

module.exports = model