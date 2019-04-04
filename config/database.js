const  mongoose = require('mongoose');
module.exports  =  mongoose.connect('mongodb+srv://api_user:9F07T1TtmCHKT5Qt@cluster0-tgn01.mongodb.net/starwars?retryWrites=true',{
  useNewUrlParser: true
});