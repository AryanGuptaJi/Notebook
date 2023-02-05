const mongoose = require('mongoose');

const NotesSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    desciption:{
        type: String,
        required: true, 
         unique: true
    },
    tag:{
        type: String,
        deafult: "General"
    },
    date:{
        type: Date,
        default: Date.now 
    },
  });

module.exports = mongoose.model('notes', NotesSchema);