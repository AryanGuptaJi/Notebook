const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String, 
        
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

module.exports = mongoose.model('notes', NotesSchema) ;