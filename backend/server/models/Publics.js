const mongoose = require('mongoose');
const {Schema} = mongoose;

//Modelo de las publicaciones

const PublicSchema = new Schema({
    Estado: {type: String, required: true},
    Image: {type:String},
    user: {type:String}
});

module.exports = mongoose.model('Public', PublicSchema);