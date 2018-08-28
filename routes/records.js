const express = require('express')
const recordsRouter = express.Router()
const Record = require('../models/records')

const handleRequest = (res, err, data, isPost = false) => {
    if (err) return res.status(500).send(err)
    return isPost ? res.status(201).send(data) : res.status(200).send(data)
}

recordsRouter.route('/').post((req, res) => {
    const record = new Record(req.body)
    record.save((err, record) => {
        handleRequest(res, err, record, true)
    })
})

module.exports = recordsRouter
