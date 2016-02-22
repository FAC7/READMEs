# TESTING REDIS DATA STRUCTURES

## Conceptual Aside
* We're aiming to test the interaction of our code with the database in question *without* mocking.
* There are 16 default databases in the (*usually* called) `redis.conf` file.
* You can access any of the 16 using the command `redis-cli -n <db>` where `<db>` is the database number.
* We'll assign one of our 16 databases as the testing ground to avoid screwing up our production database.
* We'll also make our tests *atomic* - a fancy word that means the tests'll be:
    1. Independent of one another.
    2. Indifferent to any particular running order.

## wrapping-tape
* We'll wrap up our tape tests using a handy node module you can get by typing `$ npm install wrapping-tape` in the terminal.
* Why? It includes setup and teardown functionality: this feature will return the data set to its original state between each test.
* More info can be found following the link in the references.


## Client connections
* Ending your client connection after each request is important.
* Connections to redis are finite, so forgetting to end the connection could end up wasting your reserves!


## Tutorial part 1
In this part you'll be expected to write a function to make the example test case pass.

0. First `npm init`, then install redis and wrapping-tape.

1. Open a new `.js` file and require wrapping-tape and redis.

2. Create a tape tests object specifying the `setup` and `teardown` functions (you'll need to check the documentation - tweet me if you're unsure how to do this).

    ```javascript
    var client;

    var tests.module1 = tape({
        setup: function(t) {
            //create a client and select the designated test database number
            //remember to end your tape test
        },
        teardown: function(t) {
            //flush your database
            //end your client connection (think about why this is important)
            //remember to end your tape test
        }
    })
    ```
3. This case creates an assertion that tests a function that adds an array to a database.

    ```javascript
    tests.module1('tests a function that adds an array to a database', function(t) {
        var array = ['1', '2', '3', '4', '5'];
        var listName = 'new list';
        listWriter(client, listName, array);
        client.lrange(listName, 0, -1, function(error, reply){
            t.deepEqual(reply, array, "array should be ['1', '2', '3', '4', '5']")
        });
    });
    ```

4. Create the function `listWriter()` that passes the test above.

## Tutorial part 2
Here, you're expected to write a test case asserting that an error has been thrown by Redis.

1. First you'll need to complete this almost identical setup/teardown function. We're using the `lpush` method here to create a list object upon which `hget` will be called in order to provoke an error.

    ```javascript
    var tests.module2 = tape({
        setup: function(t) {
            // code from tests.module1 goes here
            client.lpush('giraffe', 0);
            // and here
        },
        teardown: function(t) {
            // code from tests.module1 goes here
        }
    });
    ```
2. The function `errorMaker()` throws an error:

    ```javascript
    function errorMaker(client, callback) {
        client.hget('giraffe', 7, callback);
    };
    ```
3. Write a test case that includes a callback able to assert that redis has thrown an error. Note: you'll need to call `errorMaker()` in your test and make it take your callback as a parameter.



## References
* [npm documentation on wrapping-tape](https://www.npmjs.com/package/wrapping-tape)
* [dwyl redis-connection documentation](https://github.com/dwyl/redis-connection)

## Cheatsheet
If you get stuck, have a look at the cheatsheet in this directory.
