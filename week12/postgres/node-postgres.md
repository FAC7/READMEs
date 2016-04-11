How to get PostgreSQL

* Use brew, if you have it. `brew install postgres` should do the trick.
* Alternatively, install it from [here](http://www.enterprisedb.com/products-services-training/pgdownload#windows), which will also install PGAdmin, the GUI for interacting with the database. 

We will assume that you've got all set up with PostgreSQL, and have a table that you want to put things into or get things out of. For example, I set up a table of FAC7 members. My table looks like this:

| first_name    | last_name     | Age   | id    |
| ------------- | ------------- | ----- | ----- |
| Virginie      | Trubiano      | 22    | 1     |
| Owen          | Turner-Major  | 23    | 2     |
| Andrew        | MacMurray     |   27  | 3     |
| Elias         | Malik         |    26 | 4     |

You should also have a username and a password for your database. You will need this.

To interact with postgres from node, we will want to use an npm package called node-postgres. Install it with: `npm install pg --save`. After that, you can connect to the database like so: 

```javascript
const pg = require('pg')
const tape = require('tape')
const connectionString = 'pg://myPostgresUsername:myPostgresPassword@localhost/postgres'
pg.connect(connectionString, (err, client, done) => {
  tape('Check that we can retrieve something from the database', (t) => {
    client.query('SELECT last_name FROM fac_members WHERE first_name = $1', ['Owen'], (err, result) => {
      t.equal('Turner-Major', result.rows[0].last_name, 'success!')
      t.end()
      done()  // client idles for 30 seconds before closing
    })
  })
})
```
* The connectionString must include your username (mine is 'postgres') and your password (mine is 'mypostgrespassword' (super-hackerproof)).
* To **connect to the database**, use `pg.connect` It takes your connectionString, and a callback which takes `err, client, done`. You can make queries inside this callback. The database stays connected for 30 seconds once you call `done()` within the callback.
* To **query the database**, use `client.query`.
 * The first parameter is the text of the query, with $1, $2 etc. for the things you are going to input (this will be useful when you are e.g. searching for user input in the db)
 * The second parameter is an array of the inputs. So here, 'Owen' will be substituted for the $1 in the query string.
 * The third parameter is a callback that takes `err` and `result`. `result` is an object with a `rows` property which is an array of objects, where each object is a result from the table. In the example above, result.rows is: 
 ```javascript
 [ { last_name: 'Turner-Major' } ]
 ```
 * This is because we only asked for the last name (`SELECT last_name`). Here is another example:

 ```javascript
client.query('SELECT * FROM fac_members', (err, result) => {
  console.log(result.rows)
  done()  // client idles for 30 seconds before closing
})
 ```
 * Here, we omitted the second parameter (array of inputs), because we just hard-coded the whole query string. This logs result.rows as:
 ```javascript
  [ { first_name: 'Andrew', last_name: 'MacMurray', age: 27, id: 1 },
  { first_name: 'Elias', last_name: 'Malik', age: 27, id: 2 },
  { first_name: 'Owen', last_name: 'Turner-Major', age: 23, id: 3 },
  { first_name: 'Virginie', last_name: 'Trubiano', age: 22, id: 4 } ]
 ```
* That's it. Seems pretty easy, but there are a [lot of docs](https://github.com/brianc/node-postgres/wiki). Have fun!