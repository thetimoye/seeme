const express = require('express')
const genres = require('../routes/genres')
const customers = require('../routes/customers')
const movies = require('../routes/movies')
const rentals = require('../routes/rentals')
const users = require('../routes/users')
const auth = require('../routes/auth')
const error = require('../middleware/error')
const logger = require('../middleware/logger')

module.exports = (app) => {
    app.use(express.json()) // Accept json texts in request bodies
    app.use(express.urlencoded()) 
    app.use(express.static('public')) // Declears the public page of the app
    app.use('/genres', genres)
    app.use('/customers', customers)
    app.use('/movies', movies)
    app.use('/rentals', rentals)
    app.use('/users', users)
    app.use('/auth', auth)
    app.use(error)
    app.use('/logger',logger)
}