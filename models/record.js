const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recordSchema = new Schema({
    clientaddress: {
        type: String,
        require: true
    },
    clientlatitude: {
        type: Number,
        required: true
    },
    clientlongitude: {
        type: Number,
        required: true
    },
    clienttype: {
        type: String,
        required: true,
        enum: ['buyer', 'seller', 'buyer-and-seller']
    },
    propertytype: {
        type: String,
        enum: [
            'single family',
            'condominium',
            'townhouse',
            'vacant lot',
            'commercial',
            'other'
        ]
    },
    propertytypebuying: {
        type: String,
        enum: [
            'single family',
            'condominium',
            'townhouse',
            'vacant lot',
            'commercial',
            'other'
        ]
    },
    propertytypeselling: {
        type: String,
        enum: [
            'single family',
            'condominium',
            'townhouse',
            'vacant lot',
            'commercial',
            'other'
        ]
    },
    budget: {
        type: Number
    },
    price: {
        type: Number
    },
    sellingaddress: {
        type: String
    },
    sellinglatitude: {
        type: Number
    },
    sellinglongitude: {
        type: Number
    },
    loan: {
        type: String,
        required: true,
        trim: true,
        enum: ['approved', 'need a lender', 'no thanks']
    },
    fullname: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    phone: {
        type: String
    },
    additionalinformation: {
        type: String
    }
})

module.exports = mongoose.model('Record', recordSchema)
