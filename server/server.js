const express = require('express')
const path = require('path');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname , '../client/build')))
}

app.use(routes)

// express.js middelware to instruct server to make certain files readily available and to not gate it behind an endpoint
app.use(express.static('public'));

app.listen(PORT, () => console.log('server running on port 3001'))