const produtorio = require('../produtorio');
module.exports = (app) => {   
   app.get('/produtorioIterativo/:m/:n', produtorio.getProdutorioIterativo);
   app.get('/produtorioRecursivo/:m/:n', produtorio.getProdutorioRecursivo);
}