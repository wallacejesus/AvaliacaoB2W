const express = require('express');
const routes = function(server){
const router = express.Router();
  server.use('/api',router);
  const planetaService = require('../planeta/planetaService');
  planetaService.before('post', verificarFilmes).before('put', verificarFilmes)
  const request = require("request");
function verificarFilmes(req, res,next){

  request.get("https://swapi.co/api/planets/?search="+res.body.nome, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.log(JSON.parse(body));
    next();
  });  
}  
  planetaService.register(router,'/planeta')
  router.get('/planeta/:nome', function (req, res) {
    console.log(req.params.nome);
    planetaService.find({nome: req.params.nome}, function(err, data){
      if(err){
          console.log(err);
          return
      }
  
      res.json(data);
      res.end();
    })    
  });

  

}
module.exports =  routes;
