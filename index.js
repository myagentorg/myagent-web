const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = required('morgan')
const port = 8000

app.use(bodyParser.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost/myagent_io')

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.on('open', () => console.log('Connected to the database'))

app.use('/records', require('./routes/records'))

app.listen(port, () => console.log(`Server is running on port ${port}`))
