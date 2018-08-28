const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recordSchema = new Schema({
    contact: {
        name: {
            type: String,
            required: true
        }
    },
    location: {
        lat: {
            type: Number,
            required: true
        },
        lng: {
            type: Number,
            required: true
        }
    }
})

module.exports = mongoose.model('Record', recordSchema)
