var usersDB = { username: 'user', password: 'password', user_session: 'someencryptedvalue1234567890' };

var homeString = 'Since you have gone to the home page you have now "logged in" and your user_session cookie has been set. <br> This is instead of having to log in with a username and password.  <br>  <br> <h4>How to check your user_session cookie:</h4> Developer tools > resources tab > cookies > localhost  <br> And here is the user_session cookie.  <br> The cookie is set to expire at the end of a "session" by default. That means if you quit your browser your session will end and your cookie will be expired.  <br>  <br> <h4>Now type the endpoint /profile</h4> This will check whether your user_session cookie matches the one on our "database" ';

var loggedInString = 'You are still logged in.  <h4>Delete your cookie</h4> Developer tools > resources tab > cookies > localhost > <br><br> click on user_session and press the delete key on your keyboard. <br>  <br> Now if you refresh the page, you will no longer be logged in. If you want to "log in" again, just go back to the home page ("/")';

exports.register = function(server, options, next){
    server.route([{
        method: 'GET',
        path: '/',
        config: {
            handler: function(request, reply){
                reply(homeString).state('user_session', usersDB.user_session);
            }
        }
    },{
        method: 'GET',
        path: '/profile',
        config: {
            handler: function(request, reply){
                if ( request.state['user_session'] !== usersDB.user_session ){
                    reply('You are not logged in - go back to the home page to log in again');
                } else {
                    reply(loggedInString);
                }
            }
        }
    }]);
    return next();
};





exports.register.attributes = {
    name: 'cookiesPlugin'
};
