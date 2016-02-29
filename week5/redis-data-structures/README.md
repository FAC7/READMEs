# Redis Data Structures

Redis is what is called a key-value store, often referred to as a NoSQL database:
if we know a key, we can retrieve a given value that it refers to.

Redis supports a number of different data structures.

Some key ones are:
+ strings
+ hashes
+ lists
+ sets
+ sorted sets

### Lists

A list is a series of ordered values

Some of the list commands:

| Command | Description |
| --- | --- |
| `LPUSH myList item` | puts `item` at the beginning of the list `myList` |
| `RPUSH myList item2` | puts `item2` at the end of the list `myList` |
| `LRANGE myList 0 -1` | displays all the items in the list (from 0 to the end) |
| `LLEN myList` | displays the length of the list |
| `LPOP myList` | removes and returns the first item of `myList` |
| `RPOP myList` | removes and returns the last item of `myList` |

### Sets

A set is like a list but does not have an order and each element can only appear
once.

Some of the set commands:

| Command | Description |
| --- | --- |
| `SADD myAmazingSet item` | adds `item` to `myAmazingSet` |
| `SREM myAmazingSet item` | removes `item` fom `myAmazingSet` |
|  `SISMEMBER myAmazingSet item2` | tests if `item2` is in `myAmazingSet`, returns 0 or 1 |
| `SMEMBERS myAmazingSet` | returns all members in `myAmazingSet` |
| `SUNION myAmazingSet myFantasticSet` | zips both sets together and returns a list of the elements (but without repeated values) |
| `SINTER myAmazingSet myFantasticSet` | returns common elements between `myAmazingSet` and `myFantasticSet` |

### Sorted Sets

A sorted set is similar to a regular set, but each value has an associated score.
 This score is used to sort the elements in the set.

| Command | Description |
| --- | --- |
| `ZADD mySortedSet 01 item` | adds a value to the sorted set called `item` with a score of `01` |
| `ZSCORE mySortedSet item` | returns the score of `item` |
| `ZRANGE mySortedSet 0 0` | returns the range specified, sorted by the score |

### Hashes

They are maps between strings and string values. This makes hashes useful for
representing objects.
Hashes can be set up as follows:

`HSET user:1000 name “John Smith”`  
`HSET user:1000 password “s3cret”`  
`HSET user:1000 visits 10`

This sets a hash (user:1000) with these keys and values (name, password, and visits).

| Command | Description |
| --- | --- |
| `HGETALL user:1000` | gets all the data back for `user:1000`|
| `HMSET user:1001 name "Mary Jones" password "hidden" visits 5` | sets multiple fields of `user:1001` in one line |
| `HGET user:1001 name` | returns the `name` of `user:1001` |
| `HDEL user:1000 password`| deletes `password` of `user:1000` |
| `HINCRBY user:1000 visits 1` | increases the numerical value of `visits` by given number. If the field specified doesn’t exist, HINCRBY makes it the given number |

A full list of [hash commands can be found here](http://redis.io/commands#hash).
You can also filter by group to look at commands for other data types.

### References

[What is redis?](http://redis.io)  
[Owen's Amazing Notes](https://github.com/oturnermajor/Notes/blob/master/redis.md)  
[Redis commands tutorial](http://try.redis.io/)
