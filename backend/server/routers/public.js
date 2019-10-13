const Router = require('express').Router();
const Public = require('../models/Publics');
const multer = require('multer');
const path = require('path');


const storage =  multer.diskStorage({
    destination: path.join(__dirname, '../public/Publicaciones') ,
    filename: (req,file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage,
    dest: path.join(__dirname, '../public/Publicaciones'),
    limits: {fileSize: 3000000},
    fileFilter: (req,file,cb) => {
        const filetypes = /jpeg|jpg|png|gif/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLocaleLowerCase());
        if (mimetype && extname) {
            return cb(null, true);
        }else{
            cb("Error: Debe ser una imagen valida");
        }

    }
}).single('Image');


//Insertar las publicaciones
Router.post('/add-public', upload, async(req,res) => {
    const NewPublic = new Public({
        Estado: req.body.Estado,
        Image: req.file.originalname
    }); 
    NewPublic.user = req.user._id;
    await NewPublic.save();
    console.log('Agregado una nueva publicacions');
    //console.log(req.body.Estado);
    res.redirect('/Home');
});


module.exports = Router;