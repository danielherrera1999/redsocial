const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const User = require('../models/Users');

const Config = require('../config');


passport.use(new FacebookStrategy({
    clientID: Config.facebook.id,
    clientSecret: Config.facebook.secret,
    callbackURL: '/auten/facebook/callback'
    },function(accessToken,refreshToken,profile,done){
        console.log('token: '+accessToken+' '+profile.id+' '+profile.displayName);
        User.findOne({provider_id: profile.id}, function(err,user){
            if(err) throw(err);
            if(!err && user!= null){
            console.log('user != null');
            return done(null, user);
            }

            var user = new User({
                FullName: profile.displayName,
                Datos: '1',
                provider_id: profile.id,
                provider: profile.provider
            });

            user.save(function(err) {
                if(err) throw err;
                console.log('ok');
                done(null, user);
            });

        });
    }
));



passport.use(new localStrategy({
    usernameField: 'email',
}, async(email,password,done) => {
    const user = await User.findOne({Email: email});
    if (!user) {
        return done(null,false,{message: 'Usuario no escontradp'});
    }else{
        const match = await user.matchPassword(password);
        if (match) {
            return done(null, user);
        }else{
            return done(null,false,{message:'Contraseña Incorrecta'});
        }
    }
}));

passport.serializeUser((user,done) => {
    done(null,user.id);
}); 

passport.deserializeUser((id,done) => {
    User.findById(id, (err,user) => {
        done(err, user);
    });
});