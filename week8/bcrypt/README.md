# Bcrypt

Bcrypt is a hashing algorithm

```
'password12345 ---> Bcrypt ---> 'a234weIru2842GHAJ48475IUOI287r'

(i.e. random string of characters)
```

Each time `password12345` is entered into bcrypt the same random string will come out the other side

The benefit of Hashing with Bcrypt is that it's easy to go from `password12345` to the random string but very difficult to go the other way round.

### Why Bcrypt over other Hashing algorithms?

May other hashing algorithms are designed to be fast (e.g MD5 Sha1) but Bcrypt is DESIGNED to be slow, makes it more difficult to decrypt the password by brute force

### Dictionary Attack

Hackers can have a list of common passwords and their Bcrypt strings, and match a stolen password hash to the dictionary (this is why it's important to have a mixture of uppercase, lowercase, numbers and other characters)

### Salting

One way to combat this is by salting the passwords:

Salting adds random strings in between the hash string.

The big benefit to this combined with Bcrypt is that it would take the hacker a very long time to generate a dictionary based on the salt because Bcrypt is so slow!

### How to use bcrypt and salt
First and for most, install bcrypt.            
```shell
$ npm install bcrypt
```      
The module provides us with 2 ways to hash the password – sync and async.

#### Sync Usage

For generating the password hash and storing it you’d do something like this –

```javascript
// Load the bcrypt module
var bcrypt = require('bcrypt');
// Generate a salt
var salt = bcrypt.genSaltSync(10);
// Hash the password with the salt
var hash = bcrypt.hashSync("my password", salt);

// Finally just store the hash in your DB
// .. code to store in Redis/Mongo/Mysql/Sqlite/Postgres/etc.
```

The salt+hash can also be auto-generated in a single line of code –

```javascript
var hash = bcrypt.hashSync("my password", 10);
```
During authentication you need to check the incoming password string against the hash. This is what you’d do –
```javascript
// Load the password hash from DB
// Let's assume it's stored in a variable called `hash`
bcrypt.compareSync("my password", hash); // true
bcrypt.compareSync("not my password", hash); // false
``
"my password" is the correct one (sent via login form or some other method by the user) hence compareSync returns true while in the second case, when the password is incorrect, it returns false.

#### Async Usage

The module also provides us with an async flavour that can be used like this –

```javascript

var bcrypt = require('bcrypt');
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("my password", salt, function(err, hash) {
        // Store hash in your password DB.
    });
});

// or

bcrypt.hash('bacon', 10, function(err, hash) {
    // Store hash in your password DB.
});
```


.. and this is how you’d compare the hash saved in DB with the user supplied password –
```javascript
// Load password hash from DB
bcrypt.compare("my password", hash, function(err, res) {
    // res === true
});
bcrypt.compare("not my password", hash, function(err, res) {
    // res === false
});

```
If you’re wondering what the 10 (that’s used for hashing) is, then that’s the work factor or the number of rounds the data is processed for. More rounds leads to more secured hash but slower/expensive process.

### Resources

Video: [Bcrypt & Password Security](https://www.youtube.com/watch?v=O6cmuiTBZVs)        
Article: [Using the node js bcrypt module to hash and safely store passwords](http://codetheory.in/using-the-node-js-bcrypt-module-to-hash-and-safely-store-passwords/)
