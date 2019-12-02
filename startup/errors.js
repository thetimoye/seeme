// require('winston-mongodb')
const winston = require('winston')

module.exports = () =>{
    // winston.add(winston.transports.File, {filename: 'logfile.log'})
// winston.add(winston.transports.MongoDB, {db: 'mongodb://localhost/movies'})
process.on('uncaughtException', (ex) => {
    console.log('From env: Something went wrong.')
})
process.on('unhandledRejection', (ex) => {
    console.log('From env: Something went wrong with a Promise.')
})

}