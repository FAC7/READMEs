// A standard plugin has been set up for you.
// The aim of the tutorial is to set a cookie (hard coded for ease)
// when a user first enters the page, so that when they return to the page,
// we can check for existing cookies and, reply with a 'Welcome back' message

exports.register = function(server, options, next){
    server.route({
        method: 'GET',
        path: '/',
        config: {
            handler: function(request, reply){
                // inside the handler you need to check whether a cookie
                // with name 'firstname' exists on the users side.
                // to get a cookie use the request.state['<<cookiename>>']
                // if( ! << check for cookie on the request >>  )
                    //If the cookied doesn't exist, then reply('First visit')
                    // and use the .state function to add a cookie in the form:
                    // ('key','value') ==> ('firstname','your first name')
                // else
                    // reply('Welcome back ' + <<using the cookie and add the users first name here>>)
            }
        }
    });
    return next();
};

exports.register.attributes = {
    name: 'cookiesPlugin'
};
