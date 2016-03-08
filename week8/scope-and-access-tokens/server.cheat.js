require('env2')('./config.env')

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || 'http://localhost'
const GH_CLIENT_ID = process.env.GITHUB_CLIENT_ID
const GH_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET

const Hapi = require('hapi')
const url = require('url')
const querystring = require('querystring')
const http = require('https')

const server = new Hapi.Server()

server.connection({port: PORT})

const createGithubAuthRoute = function() {
  return url.format({
    protocol: 'https',
    host: 'github.com',
    pathname: 'login/oauth/authorize',
    query: {
      client_id: process.env.GITHUB_CLIENT_ID,
      scope: ['user:follow'],
      redirect_uri: HOST + ':' + PORT + '/welcome'
    }
  })
}

const makeRequest = function(options, cb) {
  var request = http.request(options, function(response) {
    var body = ''
    response.on('data', (chunk) => body += chunk)
    response.on('end', () => {
      cb(null, body)
    })
    response.on('error', (err) => cb(err))
  })
  request.write(options.body)
  request.end()
}

server.route([{
  path: '/login',
  method: 'GET',
  handler: function(req, reply) {
    var destination = createGithubAuthRoute()
    reply.redirect(destination)
  }
},{
  path: '/welcome',
  method: 'GET',
  handler: function(req, reply) {
    process.env.CODE = req.url.query.code

    makeRequest({
      hostname: 'github.com',
      path: '/login/oauth/access_token',
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
      body: querystring.stringify({
        client_id: GH_CLIENT_ID,
        client_secret: GH_CLIENT_SECRET,
        code: req.url.query.code,
      })
    }, function(err, response) {
      process.env.ACCESS_TOKEN = JSON.parse(response).access_token
      reply.redirect('/follow')
    })
  }
},{
  path: '/follow',
  method: 'GET',
  handler: function(req, reply) {
    makeRequest({
      method: 'PUT',
      hostname: 'api.github.com',
      path: '/user/following/katbow',
      headers: {
        "Authorization": "token " + process.env.ACCESS_TOKEN,
        "Content-Length": 0,
        "User-Agent": "OauthTest"
      },
      body: ''
    }, function(err, response) {
      // and reply here
    })
  }
}])

module.exports = server
