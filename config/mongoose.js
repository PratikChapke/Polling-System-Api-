const mongoose = require('mongoose')

 mongoose.connect('mongodb://localhost:27017/api');

const db = mongoose.connection;
db.on('error', console.error.bind(console , " error connection to mongosDB"));

db.once('open', function (){
    console.log('Connected to database a:: mongooseDB')
})
module.exports = db;

