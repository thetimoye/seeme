const express = require('express')
require('express-async-errors')
require('./startup/db')()

const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const app = express()
require('./startup/routes')(app)
require('./startup/config')(app)
require('./startup/errors')

// === PORT TO LISTEN ON ===
port = process.env.PORT || 3000
app.listen(port, () => {console.log(`You are using port ${port}`)})