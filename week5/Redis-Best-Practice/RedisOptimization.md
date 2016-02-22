# Why might you need to optimize Redis?

Since Redis 2.2 many data types are optimized to use less space up to a certain size. ```Hashes```, ```Lists```, ```Sets``` composed of just integers, and ```Sorted Sets```, when smaller than a given number of elements, and up to a maximum element size, are encoded in a very memory efficient way that uses up to 10 times less memory (with 5 time less memory used being the average saving).

![](http://imgs.xkcd.com/comics/is_it_worth_the_time.png)


#### Hashes
Redis Hashes are maps between string fields and string values, so they are the perfect data type to represent objects

(e.g. A User with a number of fields like name, surname, age, and so forth):

```bash
@cli
HMSET user:1000 username antirez password P1pp0 age 34
HGETALL user:1000
HSET user:1000 password 12345
HGETALL user:1000
```

#### Lists
Redis Lists are simply lists of strings, sorted by insertion order. It is possible to add elements to a Redis List pushing new elements on the head (on the left) or on the tail (on the right) of the list.

Some example of list operations and resulting lists:
```bash
LPUSH mylist a   # now the list is "a"
LPUSH mylist b   # now the list is "b","a"
RPUSH mylist c   # now the list is "b","a","c" (RPUSH was used this time)
```

#### Sets
Redis Sets are an unordered collection of Strings. It is possible to add, remove, and test for existence of members in O(1) (constant time regardless of the number of elements contained inside the Set).
Redis Sets have the desirable property of not allowing repeated members. Adding the same element multiple times will result in a set having a single copy of this element. Practically speaking this means that adding a member does not require a check if exists then add operation.

#### Sorted Sets
Redis Sorted Sets are, similarly to Redis Sets, non repeating collections of Strings. The difference is that every member of a Sorted Set is associated with score, that is used in order to take the sorted set ordered, from the smallest to the greatest score. While members are unique, scores may be repeated.

For more information click [here](http://redis.io/topics/data-types).

## Some tips about Redis optimization

#### Use hashes
You must be aware that every key in Redis comes with some additional metadata. So when you’ll store objects like ```“key=value”``` that doesn’t mean you will use 8 bytes per key.

```bash
redis redis:6379> DEBUG OBJECT my/key
Value at:0x7f36f2980900 refcount:1 encoding:raw serializedlength:4 lru:463740 lru_seconds_idle:1215660
```
Redis has to e.g. store some info for LRU algorithm.

Thanks to ```hashes``` you can save some space.

#### Use short keys
Easy trick to implement but can also reduce amount of required memory.

Think of it: if you’ve 100,000,000 keys named like

```bash
my/fancy/key-name/... (18 characters)
```

the overhead for just storing names is rather big in comparision to possible another format like:

```bash
m/f/kn/...   (7 characters)
```
you save 11 characters (11 bytes), which at big scale could let you to save

100,000,000 * 11 bytes = 1 GB of RAM memory!

#### Find Out What's Slowing Down Redis
Since Redis doesn't have the most verbose of logs, it's often hard to trackdown what exactly is going on inside your instance. Luckily Redis provides you with the commandstat utility to show you this:

```bash
127.0.0.1:6379> INFO commandstats
# Commandstats
cmdstat_get:calls=78,usec=608,usec_per_call=7.79
cmdstat_setex:calls=5,usec=71,usec_per_call=14.20
cmdstat_keys:calls=2,usec=42,usec_per_call=21.00
cmdstat_info:calls=10,usec=1931,usec_per_call=193.10
```
This gives you a breakdown of all the commands, how many times they've been run, the number of microseconds it took to execute (total and avg per call)

To reset this simply run ```CONFIG RESETSTAT```, and you've got a brand new slate.



## Resources

+ [Redis Memory Optimization](https://github.com/sripathikrishnan/redis-rdb-tools/wiki/Redis-Memory-Optimization)

+ [Redis Documentation](http://redis.io/topics/memory-optimization)

+ [Understanding the Top 5 Redis Performance Metrics](http://www.datadoghq.com/wp-content/uploads/2015/06/Top-5-Redis-Performance-Metrics-Guide-Ebook.pdf)

+ [redis-js](https://www.npmjs.com/package/redis-js)

+ [10 quick tips about redis](http://objectrocket.com/blog/how-to/10-quick-tips-about-redis/)
