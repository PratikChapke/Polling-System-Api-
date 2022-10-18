const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000;
const db = require('./config/mongoose.js')

const bodyParser = require('body-parser');



app.use(
    bodyParser.urlencoded({
        extended: false,
    })
)
app.use(bodyParser.json());
// use express router
app.use('/', require('./routes'));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})