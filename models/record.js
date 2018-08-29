const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recordSchema = new Schema({
    clientLocation: {
        address: {
            type: String,
            require: true
        },
        latLng: {
            lat: {
                type: Number,
                required: true
            },
            lng: {
                type: Number,
                required: true
            }
        }
    },
    clientType: {
        type: String,
        required: true,
        enum: ['buyer', 'seller', 'buyer-and-seller']
    },
    propertyType: {
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
    propertyTypeBuying: {
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
    propertyTypeSelling: {
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
    sellingAddress: {
        address: {
            type: String
        },
        latLng: {
            lat: {
                type: Number
            },
            lng: {
                type: Number
            }
        }
    },
    loan: {
        type: String,
        required: true,
        trim: true,
        enum: ['approved', 'need a lender', 'no thanks']
    },
    contact: {
        name: {
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
        additionalInfo: {
            type: String
        }
    }
})

module.exports = mongoose.model('Record', recordSchema)
