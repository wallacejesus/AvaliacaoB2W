const  mongoose = require('mongoose');
module.exports  =  mongoose.connect('mongodb+srv://user:password@host',{
  useNewUrlParser: true
});