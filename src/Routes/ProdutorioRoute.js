const produtorio = require('../produtorio');
module.exports = (app) => {   
   app.get('/produtorioRecursivo/:m/:n', produtorio.getProdutorioRecursivo);
   app.get('/produtorioIterativo/:m/:n', produtorio.getProdutorioIterativo);
}