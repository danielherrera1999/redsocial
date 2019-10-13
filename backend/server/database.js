const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://127.0.0.1:27017/BDSocial',{
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false
    }
)
.then(db => console.log('Base conectada'))
.catch(err => console.error(err));