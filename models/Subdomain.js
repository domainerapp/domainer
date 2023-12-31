const mongoose = require("mongoose")

const subdomainSchema = new mongoose.Schema({
    subdomain: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    pointedTo: {
        type: String,
        required: true,
    },
    recordType: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    }
})

const model = mongoose.model("subdomains", subdomainSchema)

module.exports = model