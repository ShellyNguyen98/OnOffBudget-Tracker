module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/bud_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})