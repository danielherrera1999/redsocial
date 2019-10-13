const Router = require('express').Router();
const User = require('../models/Users');
const Friend = require('../models/Friends');
const passport =  require('passport');


const { isAuthenticated } = require('../helpers/auth');

Router.post('/add-user', async (req,res) => {
    const {FullName,Email,Genero,Password,Confirme_Password} =req.body;
    const errors = [];
    
    if (!FullName) {
         errors.push({text: 'Debe llenar el campo'});
       //res.json('Debe llenar los campos');
    }
    if (!Email) {
         errors.push({text: 'Debe llenar el campo'});
       //res.json('Debe llenar los campos');
    }
    if (!Genero) {
         errors.push({text: 'Debe llenar el campo'});
       //res.json('Debe llenar los campos');
    }
    if (!Password) {
        errors.push({text: 'Debe llenar el campo'});
       //res.json('Debe llenar los campos');
    }
    if (!Confirme_Password) {
         errors.push({text: 'Debe llenar el campo'});
       //res.json('Debe llenar los campos');
    }
    if (Password != Confirme_Password) {
         errors.push({text: 'No son iguales'});
       //res.json('No son iguales');
    }
    if (Password.length < 4 ) {
        errors.push({text: 'La contraseña debe ser mayor de 4 caracteres'});
        //res.json('Debe ser mayor a 4 caracteres');
    }

    if (errors.length > 0) {
        res.render('users/index', {
            errors,FullName,Email,Genero,Password,Confirme_Password
        });
    }else{
        const EmailUser = await User.findOne({Email: Email});
        if (EmailUser) {
            res.json('Email esta en uso');
        }else{
            const NewUser = new User({FullName,Email,Genero,Password});
            NewUser.Password =  await NewUser.encryptPassword(Password);
            await NewUser.save();
            const success = 'Registrado'

            res.render('users/index');

            console.log(req.body);
            /*res.json({
                status: 'Registrado'
            });*/
        }
        
    }

    
});


Router.get('/auten/facebook',  passport.authenticate('facebook'));
Router.get('/auten/facebook/callback', passport.authenticate('facebook',{
    successRedirect: ('/Home'),
    failureRedirect: '/',
    failureFlash: true
}));

Router.post('/Loguearse', passport.authenticate('local', {
    successRedirect: ('http://localhost:8080/'),
    failureRedirect: '/',
    failureFlash: true
}));

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