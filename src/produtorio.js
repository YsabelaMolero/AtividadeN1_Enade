exports.getProdutorioIterativo = (req, res, next) => {
    var m = req.params.m;
    var n = req.params.n;
    var result = parseInt(produtorioIterativo(m, n));
    res.status(200).send({'result':result, 'm':m, 'n':n});
 };

 exports.getProdutorioRecursivo = (req, res, next) => {
    var m = req.params.m;
    var n = req.params.n;
    var result = parseInt(produtorioRecursivo(m, n));
    res.status(200).send({'result':result, 'm':m, 'n':n});
 };
 
function produtorioIterativo(m, n){    
    var r = 1;
    m = parseInt(m);
    n = parseInt(n);
    for(i = m; i <= n; i += 1){
        console.log('i '+i);
        r *= i + (1 / i);
    }
    console.log('Recursivo');
    return r;
}

function produtorioRecursivo(m, n){
    m = parseInt(m);
    n = parseInt(n);
    if(m == n){
        console.log('m=n'+m + '-' +n);
        return(n + (1/n));
    }
    else{
        console.log('m!=n'+m + '-' +n);
        return (m + (1/m)) * produtorioRecursivo(m+1, n);
    }
}