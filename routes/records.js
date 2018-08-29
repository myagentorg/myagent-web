const express = require('express')
require('dotenv').config()
const recordsRouter = express.Router()
const Record = require('../models/record')
const axios = require('axios')

const handleRequest = (res, err, data, isPost = false) => {
    if (err) return res.status(500).send(err)
    return isPost ? res.status(201).send(data) : res.status(200).send(data)
}

recordsRouter.route('/').post((req, res) => {
    const record = new Record(req.body)

    const excludeVEntry = obj => {
        return Object.keys(obj).reduce((final, key) => {
            if (key !== '__v') {
                key !== '_id'
                    ? (final[key] = obj[key])
                    : (final['dbId'] = obj[key])
                return final
            }
            return final
        }, {})
    }

    const createHubspotBody = body => {
        return Object.keys(body).reduce(
            (final, key) => {
                final.properties.push({ property: key, value: body[key] })
                return final
            },
            { properties: [] }
        )
    }

    console.log(createHubspotBody(excludeVEntry(req.body)))

    axios
        .post(
            `https://api.hubapi.com/contacts/v1/contact/?hapikey=${
                process.env.HUBSPOT_KEY
            }`,
            createHubspotBody(excludeVEntry(req.body))
        )
        .then(response => console.log(response.data))
        .catch(err => console.log(err.data))

    record.save((err, record) => {
        handleRequest(res, err, record, true)
    })
})

module.exports = recordsRouter
