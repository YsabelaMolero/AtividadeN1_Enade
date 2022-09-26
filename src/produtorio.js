exports.getProdutorioIterativo = (req, res, next) => {
    let m = req.params.m;
    let n = req.params.n;
    let result = produtorioIterativo(m, n);
    res.status(200).send({'result':result, 'm':m, 'n':n});
 };

 exports.getProdutorioRecursivo = (req, res, next) => {
    let m = req.params.m;
    let n = req.params.n;
    let result = produtorioRecursivo(m, n);
    res.status(200).send({'result':result, 'm':m, 'n':n});
 };
 
function produtorioIterativo(m, n){
    if(m == n)
        return(n + (1/n));
    else
        return (m + (1/m));
}

function produtorioRecursivo(m, n){
    let i = 1;
    let r = 1;
    for(i = m; i <= n; i += 1){
        r *= i + (1 / i);
    }
    return r;
}