const mongoose = require('mongoose');


const OptionsSchema = new mongoose.Schema({
   text: {
    type : String,
   required: true
   },
   votes :{
    type: String,
    required: true,
    default: 0
   },
   link_to_vote: {
    type: String,
    required: true,
    default: "",
   },

},
);

const Options = mongoose.model('Options', OptionsSchema);
module.exports = Options;

