const mongoose = require('mongoose');
if (!process.env.MONGODB_URI) {
  throw new Error('MONGODB_URI is not set. Copy .env.example to .env and fill it in.');
}

mongoose.connect(
    process.env.MONGODB_URI);

const dataSchema = new mongoose.Schema({
    name : String,
    data : Object
})
   
const Data = mongoose.model('Data', dataSchema);


module.exports = {
    Data
};
