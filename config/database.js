const  mongoose = require('mongoose');
module.exports  =  mongoose.connect('mongodb+srv://user:password@host/starwars?retryWrites=true',{
  useNewUrlParser: true
});