const mongoose = require('mongoose');


const QuestionSchema = new mongoose.Schema({
    title: {
        type: String,
        require : true,
        unique: true
    },
    Options: [{
   type: mongoose.Schema.Types.ObjectID,
   ref: "Option"
    }]

}
);
console.log("inside Q model");

const Questions = mongoose.model('Questions', QuestionSchema);
module.exports = Questions;

