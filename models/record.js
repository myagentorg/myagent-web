const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Record = new Schema({
    name: {
        type: String,
        required: true
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
