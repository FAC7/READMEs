# Redis Data Structures

Redis is what is called a key-value store, often referred to as a NoSQL database: if we know a key, we can retrieve a given value that it refers to.

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

A set is like a list but does not have an order and each element can only appear once.

Some of the set commands:

| Command | Description |
| --- | --- |
| `SADD myAmazingSet item` | adds `item` to `myAmazingSet` |
| `SREM myAmazingSet item` | removes `item` fom `myAmazingSet` |
|  `SISMEMBER myAmazingSet item2` | tests if `item2` is in `myAmazingSet`, returns 0 or 1 |
| `SMEMBERS myAmazingSet` | returns all members in `myAmazingSet` |
| `SUNION myAmazingSet myFantasticSet` | zips both sets together and returns a list of the elements (but without repeated values) |
| `SINTER myAmazingSet myFantasticSet` | returns common elements between `myAmazingSet` and `myFantasticSet` |



### References

[What is redis?](http://redis.io)
