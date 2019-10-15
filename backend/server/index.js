const express = require('express');
const app = express();
const path = require('path');
const override = require('method-override');
const exphbs = require('express-handlebars')
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

//bd
require('./database');
//verificacion login
require('./config/passport');


//Configuracion
app.set('port', process.env.PORT || 4000);
//vista
app.set('views', path.join(__dirname,'views'));
//motores de plantilla
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partialS'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(override('_method'));
app.use(session({
    secret: 'SecretApp',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(morgan('dev'));
app.use(cors());
//Variable Globales
app.use((req,res,next) => {
    res.locals.user = req.user || null;
    next();
});


//rutas
const api = '/api/fetbook/' ;
app.use(api,require('./routers/index'));
app.use(api,require('./routers/user'));
app.use(api,require('./routers/public'));



//archivos estatico 
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'public/publicaciones')));


//Configuracion
app.set('port', process.env.PORT || 8081);

//Servidor
app.listen(app.get('port'), () => {
    console.log('Servidor conectado en el puerto: ',app.get('port'));
});


