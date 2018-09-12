const express = require('express')
require('dotenv').config()
const recordsRouter = express.Router()
const Record = require('../models/record')
const axios = require('axios')
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: '208.71.173.110',
    port: 587,
    tls: {
        rejectUnauthorized: false
    },
    secure: false,
    auth: {
        user: 'info@myagent.io',
        pass: 'dH,3@ap4Hl0&'
    }
})

transporter.verify(function(error, success) {
    if (error) {
        console.log(error)
    } else {
        console.log('Server is ready to take our messages')
    }
})

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

    const hubspotBody = createHubspotBody(excludeVEntry(req.body))

    axios
        .post(
            `https://api.hubapi.com/contacts/v1/contact/?hapikey=${
                process.env.HUBSPOT_KEY
            }`,
            hubspotBody
        )
        .then(response => {
            const clientProperties = excludeVEntry(req.body)

            const mailHTML = Object.keys(clientProperties).reduce(
                (html, key) => {
                    html += `<li>${key}: ${clientProperties[key]}</li>`
                    return html
                },
                ``
            )

            const mailOptions = {
                from: 'info@myagent.io',
                to: 'info@monopolydigital.com',
                subject: 'Lead received from MyAgent.io',
                html: `
                    <div>
                        <ul>${mailHTML}</ul>
                        <p>To manage your leads, log into <a href="https://hubspot.com">hubspot.com</a>.</p>
                    </div>
                `
            }

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error)
                } else {
                    console.log(`Email sent: ${info.response}`)
                }
            })
        })
        .catch(err => console.log(err))

    record.save((err, record) => {
        handleRequest(res, err, record, true)
    })
})

module.exports = recordsRouter
