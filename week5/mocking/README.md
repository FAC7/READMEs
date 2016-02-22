# Mocking

## What does mocking mean in relation to testing?

Testing checks that the code we have written works. Mocking focuses on the code being tested and not on the behavior or state of external dependencies (i.e. the database). In mocking, the dependencies are replaced by objects that simulate the behavior of the real ones.



## What are some advantages and disadvantages of mocking?
* Advantages  - the real database is not going to be affected
* Disadvantages - can't test whether the database is working.

## Why might it be unreliable?
* doesn't properly check whether your functions are accessing the right data from the database.

## How might you mock a redis database?

There are various mocking modules.
The one that we have used us [redis-mock](https://github.com/faeldt/redis-mock). Although there are many others such as [fakeredis](https://www.npmjs.com/package/fakeredis).

You can install by

    ```
    npm install redis-mock --save-dev
    var redis = require("redis-mock"),
    client = redis.createClient();
    ```

Tutorial
Check out the Tutorial for how this module works.
