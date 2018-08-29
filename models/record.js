const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recordSchema = new Schema({
    clientType: {
        type: String,
        enum: ['buyer', 'seller', 'buyer-and-seller']
    }
    // contact: {
    //     name: {
    //         type: String,
    //         trim: true,
    //         required: true
    //     },
    //     email: {
    //         type: String,
    //         lowercase: true,
    //         trim: true,
    //         required: true
    //     },
    //     phone: {
    //         type: String
    //     },
    //     additionalInfo: {
    //         type: String
    //     }
    // },
    // location: {
    //     lat: {
    //         type: String,
    //         required: true
    //     },
    //     lng: {
    //         type: String,
    //         required: true
    //     }
    // },
    // budget: {
    //     type: String
    // },
    // price: {
    //     type: String
    // },
    // address: {
    //     lat: {
    //         type: String,
    //         required: true
    //     },
    //     lng: {
    //         type: String,
    //         required: true
    //     }
    // },
    // propertyType: {
    //     type: String,
    //     lowercase: true,
    //     enum: [
    //         'single family',
    //         'condominium',
    //         'townhouse',
    //         'vacant lot',
    //         'commercial',
    //         'other'
    //     ]
    // },
    // propertyTypeBuyer: {
    //     type: String,
    //     lowercase: true,
    //     enum: [
    //         'single family',
    //         'condominium',
    //         'townhouse',
    //         'vacant lot',
    //         'commercial',
    //         'other'
    //     ]
    // },
    // propertyTypeSeller: {
    //     type: String,
    //     lowercase: true,
    //     enum: [
    //         'single family',
    //         'condominium',
    //         'townhouse',
    //         'vacant lot',
    //         'commercial',
    //         'other'
    //     ]
    // },
    // loan: {
    //     type: String,
    //     require: true,
    //     enum: ['no thanks', 'approved', 'need lender']
    // }
})

module.exports = mongoose.model('Record', recordSchema)
