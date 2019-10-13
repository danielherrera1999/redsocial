const Router = require('express').Router();
const User = require('../models/Users');
const Public = require('../models/Publics');
const Friend = require('../models/Friends');
const { isAuthenticated } = require('../helpers/auth');



Router.get('/', async(req,res) => {
    res.render('users/index');
});

Router.get('/Datos', (req,res) => {
    res.render('users/datos');
});

Router.get('/Home', isAuthenticated,async(req,res) => {
    const user = req.user._id;
    const Publics = await Public.find({user: user});
    res.render('users/home', {Publics});
});

Router.get('/Friends',  isAuthenticated,async(req,res) => {
    const myid = req.user._id
    //Mostrando usuario
    const forUser = await User.find({_id:{$ne:myid}});
    //Traer el estado
    const SendOrRecived = await Friend.find({$or:[{from_user:req.user.id},{for_user:req.user.id}]});

    //console.log(forUser);
    console.log(SendOrRecived);

    
    //res.json(usuario);
    res.render('users/amigos', {forUser,SendOrRecived});
});

Router.get('/users', async(req,res)=>{
    const usuario = await User.find();
    res.json(usuario);
});


module.exports = Router;