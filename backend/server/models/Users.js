const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcryptjs');

//Modelo de los Usuario

const UserSchema = new Schema({
    FullName: {type: String, required: false},
    Email: {type: String, required: false},
    Genero: String,
    Password: {type: String, required: false},
    Phone: {type:String, default: ""},
    Birth: {type:Date, default: ""},
    Datos: {type:String, default: ""},
    date: { type: Date, default: Date.now},
    send: {type:String, default:""},
    //provider: {type:String, default:""},
    //provider_id: {type:String, default:""},
    
});

UserSchema.methods.encryptPassword = async (Password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(Password,salt);
    return hash;
 };
 
 UserSchema.methods.matchPassword = async function(password, callback){
     return await bcrypt.compare(password, this.Password, (err,same) => {
        if(err){
            callback(err);
        }else{
            callback(err,same)
        }
     });
 };

module.exports = mongoose.model('User', UserSchema);