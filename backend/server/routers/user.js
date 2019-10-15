const Router = require('express').Router();
const User = require('../models/Users');
const Friend = require('../models/Friends');
const passport =  require('passport');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bcrypt = require('bcryptjs');


process.env.SECRET_KEY = 'secret';


const { isAuthenticated } = require('../helpers/auth');

Router.post('/add-user', async (req,res) => {
    const {FullName,Email,Password} =req.body;
 
        const EmailUser = await User.findOne({Email: Email});
        if (EmailUser) {
            res.status(500).send('Email esta en uso');
        }else{
            const NewUser = new User({FullName,Email,Password});
            NewUser.Password =  await NewUser.encryptPassword(Password);
            if(await NewUser.save()){
                res.status(200)
                .send("Registrado correactamente");
            } else{
                res.status(500).send('No se pudo registrar');
            }         
        }    
});


//Router.get('/auten/facebook',  passport.authenticate('facebook'));
/*Router.get('/auten/facebook/callback', passport.authenticate('facebook',{
    successRedirect: ('/Home'),
    failureRedirect: '/',
    failureFlash: true
}));*/

Router.post('/Loguearse', async(req,res) => {
    const {Email,password} = req.body;
    User.findOne({
        Email: Email
    }).then(user => {
        if(!user){
            res.json({error: "Usuario no existe"})
        }else{
            if(bcrypt.compareSync(password,user.Password)){
                const payload = {
                    _id: user._id,
                    FullName: user.FullName,
                    Email: user.Email
                }
                let token = jwt.sign(payload, process.env.SECRET_KEY, {
                    expiresIn: 1440
                })
                res.send(token)
            }else{
                res.json({error: "Usuario no existe"})
            }
        }
    })
    .catch(err => {
        res.send('HOLA: '+ err);
    })
    
});

Router.get('/profile', (req,res) => {
    var decoded = jwt.verify(req.headers['authorization'],process.env.SECRET_KEY)

    User.findOne({
        _id: decoded._id
    })
    .then(user => {
        if(user){
            res.json(user)
        }else{
            res.send("Usuario no existe")
        }
    })
    .catch(err => {
        res.send('error: '+err)
    })
});

Router.put('/Editar_User/:id' , async(req,res) => {
    const {FullName,Email,Phone,Genero,Birth} = req.body;
    const Datos = '1';
    await User.findByIdAndUpdate(req.params.id, {FullName,Email,Phone,Genero,Birth,Datos});
    res.redirect('/Home');
});

Router.get('/Omitir/:id', async(req,res) => {
    const Datos = '1';
    await User.findByIdAndUpdate(req.params.id, {Datos});
    res.redirect('/Home');
});

//Cerrar Sesion 
Router.get('/Logout', isAuthenticated, (req,res) => {
    req.logout();
    res.redirect('/');
});

//Agregar Amigos
Router.get('/add-friends/:id', async(req,res) => {
    const for_user = req.params.id;
    const from_user = req.user.id;
    const Send_Resquest = '';
    const State= '';

    await User.findByIdAndUpdate(req.params.id,{send: '1'});

    const NewFriend = new Friend({
        from_user,
        for_user, 
        Send_Resquest,
        State
    });

    await NewFriend.save();

    //console.log(NewFriend);

    res.redirect('/Friends');


});


module.exports = Router;