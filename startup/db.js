
const mongoose = require('mongoose')

// === CONNECT DATABASE ===
module.exports = () => {

    mongoose.connect('mongodb://localhost/movies')
        .then(() => console.log('Connected to MongoDB...'))
        .catch(err => {
            console.log('Could not connect to db')
            process.exit(1)
        })

}