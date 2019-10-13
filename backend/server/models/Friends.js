const mongoose = require('mongoose');
const {Schema} = mongoose;

//Modelo de las publicaciones

const SendResquestSchema = new Schema({
    from_user: {type: String},
    for_user: {type:String},
    Send_Resquest: {type:String},
    State: {type:String}
});

module.exports = mongoose.model('Send_Request', SendResquestSchema);