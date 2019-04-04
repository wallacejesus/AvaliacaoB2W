const restful = require('node-restful');
const mongoose = restful.mongoose;




const planetaSchema = new mongoose.Schema({
  nome      :{type:String, required:true},
  clima     :{type:String, required:true},
  terreno   :{type:String, required:true},
  qtd_filmes:{type:Number, default:0}
});

module.exports =  restful.model('Planeta',planetaSchema) ;