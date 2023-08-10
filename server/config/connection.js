const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.ATLAS)

module.exports =  mongoose.connection;