const Planeta = require("./planeta");

Planeta.methods(['get','post','put','delete']);
Planeta.updateOptions({new:true, runValidators: true});

module.exports =  Planeta;