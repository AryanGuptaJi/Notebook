const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://aryangupta:Aryan12345@cluster0.3mmh5ni.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('strictQuery', true);
const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo; 