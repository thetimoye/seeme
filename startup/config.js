

const config = require('config')

module.exports = (app) => {
    if (!config.get('jwtPrivateKey')) {
        console.log('FATAL ERROR: JWT KEY NOT DEFINED')
        process.exit(1)
    }
    
    // CONFIGURATION DETAILS
    console.log('=================================================')
    console.log(`Env. Config details: ${config.get('name')}`)
    console.log(`                   : ${config.get('mail.server')}`)
    console.log('=================================================')
    
    // GET THE ENVIRONMENT VARIABLE
    const env = app.get('env')
    console.log(`Your environment: ${env}`)
    console.log('=================================================')
}