const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017"
mongoose.set('strictQuery', true);
const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo; 