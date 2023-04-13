'use strict'

const express = require('express');
const helmet = require('helmet');
const app = express();

//use helmet
app.use(helmet());

//routes
app.get('/', (req, res) => {
    console.log('route \'/\' called!')
    res.send({res:'Sending 200 as response'})
});

app.listen(5000)
console.log('Express app is up and running on port 5000!')