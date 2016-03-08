## JSON Web Tokens

### What is it?
It is a way of encoding JSON objects. The server can verify the information stored in the JWT using the JWT's digital signature. This verification uses a 'secret signing key' to ensure that the JWT is what it claims it is. They are becoming more and more popular as they guard against several common types of attack.

### But what actually ***IS*** it?
JWTs comprise of three distinct parts:
* Header: contains meta-data for the token e.g. the type of hashing algorithm used.
* Claims: Contains the information you want to be signed, e.g. user information. Try not to store too much.
* JSON Web Signature (JWS): The part of the JWT that makes it tamper-proof. It is signed with a secret which you can keep in your environment variables.

### How do I use it?
There is a very comprehensive dwyl repo [here](https://github.com/dwyl/learn-json-web-tokens). If you want to dive into the code yourself, save yourself some confusion by reading [this issue](https://github.com/dwyl/learn-json-web-tokens/issues/46) first. Otherwise, we have put together this step-by-step guide to the important bits of what's going on. It's very long - sorry. But you kind of need to follow the flow all the way through, and we thought it was better to give you the whole flow than to leave bits out and confuse you. If you have questions, ask Jack T. or Owen.


#### 1. Requiring
```javascript
var jwt = require('jsonwebtoken');
var secret = process.env.JWT_SECRET
```
These two lines are at the top of your handlers file. The first requires a module that can generate and verify JWTs. The second loads a JWT_SECRET from your config env file. This will be used to encode and verify JWTs - make sure you don't upload it. So. When the user inputs a username and password, the request and response from their POST request are passed to the following function

#### 2. authHandler
```javascript
function authHandler(req, res){
  if (req.method === 'POST') {
    var body = '';
    req.on('data', function (data) {
      body += data;
    }).on('end', function () {
      var post = qs.parse(body);
      if(post.username && post.username === u.un && post.password && post.password === u.pw) {
        return authSuccess(req, res);
      } else {
        return authFail(res);
      }
    });
  } else {
    return authFail(res);
  }
}
```
The important bits are `var post = qs.parse(body)` and the two lines that follow it. The username and password the user has entered are grabbed from the POST request and compared to a username and password stored somewhere else (u.un and u.pw) - in practice this would be in the database. If the credentials are correct, the authSuccess function is run with the same req/res:

#### 3. authSuccess (part #1)
```javascript
function authSuccess(req, res) {
  var token = generateAndStoreToken(req);
  // Ignore the rest for now.
  //res.writeHead(200, {
    //'content-type': 'text/html',
    //'authorization': token
  //});
  //return res.end(restricted);
}
```
A lot goes on in this function. We're going to go into two levels of further functions called from this function and then come back to it later, so pay attention. Firstly, this function runs the generateAndStoreToken function:

#### 4. generateAndStoreToken (part #1)
```javascript
function generateAndStoreToken(req, opts) {
  var GUID   = generateGUID();
  var token  = generateToken(req, GUID, opts);
  // Ignore the rest for now
  //var record = {
    //"valid" : true,
    //"created" : new Date().getTime()
  //};

  //db.put(GUID, JSON.stringify(record), function (err) {
    // console.log("record saved ", record);
  //});

  //return token;
}
```
This generates a GUID (Globally Unique Identifier) - we could do this using the module Crypto to make a long, random alphanumeric string. The key thing is that the GUID is unique for each user. Then a Token is generated using the generateToken function, which is where the jsonwebtoken module comes into play:

#### 5. generateToken

```javascript
function generateToken(req, GUID, opts) {
  opts = opts || {};

  var expiresDefault = Math.floor(new Date().getTime()/1000) + 7*24*60*60;

  var token = jwt.sign({
    auth:  GUID,
    exp:   opts.expires || expiresDefault
  }, secret);
  return token;
}
```

 We use the jwt.sign method, which takes two parameters: **first**, an object containing claims - key/object pairs. The first claim (auth) is the GUID of the user, the second (exp) is an expiration value in seconds, the default expiry date is 7 days (as set on line 80). The **second** parameter is the secret which will be used to encode the JWT (and later to verify it). This is stored in your config.env (see above). The token is then returned to the generateAndStoreToken function from earlier:

#### 6. generateAndStoreToken (part #2) (see step 4)

 ```javascript
function generateAndStoreToken(req, opts) {
  var GUID   = generateGUID();
  var token  = generateToken(req, GUID, opts);
  var record = {
    "valid" : true,
    "created" : new Date().getTime()
  };

  db.put(GUID, JSON.stringify(record), function (err) {
    // console.log("record saved ", record);
  });

  return token;
}
```
So we now have a token. Yay. The function now makes a `record` object with a 'valid' value of 'true' and a 'created' value of whenever it was created. This object is stored in the database for future reference and to verify tokens that are received. It then returns the token to the authSuccess function from earlier - the one that was doing all the work:

#### 7. authSuccess (part #2) (see step 3)
```javascript
function authSuccess(req, res) {
  var token = generateAndStoreToken(req);

  res.writeHead(200, {
    'content-type': 'text/html',
    'authorization': token
  });
  return res.end(restricted);
}
```
So now the token has been passed right back up. This function writes the function to the head of the response that was passed in, under the 'authorization' key. It then grants access to the 'restricted' page with `res.end(restricted)`.

**THIS CULMINATES THE AUTHENTICATION PART OF USING JWTs**. Let's go through what has happened. 
* The user has signed in with the correct username and password. 
* A GUID was generated and stored in the database with a 'valid' value of 'true'
* A JWT was generated containing this same GUID in its claims
* This JWT was passed back to the client in the response header. Great!

What next? This is the part that is not in dwyl README. On the client side, the client somehow grabs the token from the **response** header, and then puts the token back into their **request** header when they try to access another restricted access page. What happens now?

First, the request and response are passed to the validate function:

#### 8. validate (part #1)
 ```javascript

function validate(req, res, callback) {
  var token = req.headers.authorization;
  var decoded = verify(token);
  if(!decoded || !decoded.auth) {
    authFail(res);
    return callback(res);

    //ignore the rest of the function for now

  //} else {
    // check if a key exists, else import word list:
    //db.get(decoded.auth, function (err, record) {
      //var r;
      //try {
        //r = JSON.parse(record);
      //} catch (e) {
        //r = { valid : false };
      //}
      //if (err || !r.valid) {
        //authFail(res);
        //return callback(res);
      //} else {
        //privado(res, token);
        //return callback(res);
      /}
    //});
  //}
}
```
The function grabs the authorization property on the header (which should be the JWT that the client has been given earlier) and sets as the token variable, this is then decoded using the verify function:

#### 9. verify

```javascript
function verify(token) {
  var decoded = false;
  try {
    decoded = jwt.verify(token, secret);
  } catch (e) {
    decoded = false; // still false
  }
  return decoded;
}
```

This  function verifies the token with the jwt.verify method, using the same secret used to encode the token earlier (this is a global variable). If there is an error in verification then the try/catch statement will mean that `decoded` will be set to false, e.g. if someone has tampered with the token on the clientside. The 'decoded' variable is then returned to the validate function. 

#### 10. validate (part #2) (see step 8)

```javascript
function validate(req, res, callback) {
  var token = req.headers.authorization;
  var decoded = verify(token);
  if(!decoded || !decoded.auth) {
    authFail(res);
    return callback(res);

  } else {
    // check if a key exists, else import word list:
    db.get(decoded.auth, function (err, record) {
      var r;
      try {
        r = JSON.parse(record);
      } catch (e) {
        r = { valid : false };
      }
      if (err || !r.valid) {
        authFail(res);
        return callback(res);
      } else {
        privado(res, token);
        return callback(res);
      }
    });
  }
}
```

decoded is either the verified JWT, OR it is false. If false or if there is no auth property then the response will be passed to the auth fail function, refusing access to the client. 
However if decoded has an auth property (remember this is the GUID of the client) it will then get the record object from the database, for the GUID. It then parses this object to check that valid is set to true if it is true it sends them to the final function privado:

#### 11. privado (access to restricted area)

```javascript
function privado(res, token) {
  res.writeHead(200, {
    'content-type': 'text/html',
    'authorization': token
  });
  return res.end(restricted);
}   
```
This privado function (private is an ES reserved word so we can't use it) allows the client access to the restricted page and returns that in the response, as well as passing the token back in the header.

THE END.

### Further notes
* The second half of the process can be repeated indefinitely for all the restricted pages that the user tries to access in the future.
* You can also store the JWT in local storage, or in the user's cookies, which saves you passing it back and forth in the response and request headers. 
* JWTs are super secure, and are one of the best ways to store sensitive information on the client.
