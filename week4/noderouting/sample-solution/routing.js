var handlers = require('./handlers');

function router(req,res){
    if( req.url === '/' ){
        handlers.home(req,res);
    } else if( req.url === '/other1'){
        handlers.other1(req,res);
    }
    else {
        handlers.notFound(req,res);
    }
}
// ALTERNATE SYNTAX --- more readable key-value pairs for routes
// var routes = {
//     '/'     : handlers.home,
//     'other1': handlers.other1
// }
//
// function router(req,res){
//     if( routes[req.url] ){
//         router[req.url](res,req);
//     }
//     else {
//         handlers.notFound(req,res);
//     }
// }

module.exports = {
    app: router
}
