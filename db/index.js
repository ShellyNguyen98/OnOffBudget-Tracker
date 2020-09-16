module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/budget_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})