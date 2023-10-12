const db = require('../config/connection')
const {User} = require('../models')
const userData =  require('./user.json')

db.once('open', async ()=> {

    const users = await User.insertMany(userData);
    process.exit(0);
})