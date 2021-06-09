const mongoose = require('mongoose');


mongoose.connect(process.env.URL_DATABASE,{useNewUrlParser: true, useUnifiedTopology: true ,useCreateIndex: true, useFindAndModify: false });
mongoose.Promise = global.Promise;

module.exports = mongoose;