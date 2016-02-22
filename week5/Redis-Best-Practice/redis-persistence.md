## Redis Persistence

Redis is super-fast in part because it is an *in-memory datastore*. This means that it relies on main memory (RAM), as opposed to disk storage. However, often this memory will not be saved if the device loses power or there is some other failure. This mean the data is not very secure, and Redis databases may have poor *durability*.

* **Durability**: is the property which **guarantees that transactions that have committed will survive permanently**. For example, if a flight booking reports that a seat has successfully been booked, then the seat will remain booked even if the system crashes.

However, fear not: Redis offers two ways to ensure that data is regularly made 'safe', so that it is not lost in case of a failure.

### 1. RDB Snapshotting
This produces 'point-in-time snapshots' of the dataset when certain conditions are met. These conditions can be set by the user. E.g. the user can tell Redis to take a snapshot either if the last snapshot was more than 2 minutes ago, or if there are at least 100 new writes.
This is good because it provides an easy way to backup the whole database. You can archive these snapshots and revert to them at any point in the future. However, in event of a failure you will still lost SOME data, even if it is only a few minutes' worth. So, ideally you should also use the second persistence option offered by Redis:

### AOF (Append only file)
This is Redis' main persistence option. It works by logging every write operation that modifies the database into an 'append-only file' (AOF). Then, if there is a failure, Redis restarts and replays the operations in the AOF, which reconstructs the database to where it was before the failure. To turn this option on, change your config file by writing `CONFIG SET appendonly yes` (see tutorial below).

There are three sub-options available under AOF, which the user can choose according to their priorities in terms of durability and speed:

* *appendfsync no*: fastest option, but this means that your operating system will choose when to sync - not very safe at all.
* *appendfsync everysec*: syncs every second. Still very fast, but you could lose a second of data in event of failure. This is the default option.
* *appendfsync always*: syncs every option. Maximum safety, but probably quite slow unless you have very few writes.

### Tutorial
1. Take a database you have already made that does not have persistence options enabled. First we will see how Redis behaves without persistence options: save an item to the database and then close the database and CLI. Start up the database and CLI again and try to retrieve the item. You should get the message `(empty list or set)`. This is because Redis (by default) does not save data when the server is not running. We are going to change this:
2. Make a `redis.conf` file in the root of your project. Leave it empty for now.
3. Start your database again, this time passing the path of your new config file as an argument, e.g. `redis-server ./redis.conf`.
4. Open `redis-cli` again, and run the following commands: 
  
  <pre>
    CONFIG SET appendonly yes   // changes the configuration of your Redis server to enable AOF
    CONFIG REWRITE              // saves this configuration to your redis.conf file, 
    // so that when you close and open the database, the setting will be remembered
  </pre>

5. Your server is now saving all 'write' operations to the redis.conf file every second. You can test this by saving an item to your database, closing the database and the cli, and restarting again with the path to the redis.conf file passed in. Try to retrieve the item you just saved - this should be successful this time.
6. (Optional) - Change the *appendfsync* setting in the same way as above (`CONFIG SET` and then `CONFIG REWRITE` to remember the setting). Use the three arguments described above.


### References
* [Redis Persistence Demystified (very thorough & long)](http://oldblog.antirez.com/post/redis-persistence-demystified.html)
* [Redis Persistence Documentation (official)](http://redis.io/topics/persistence)
* [Amazon list of Redis parameters (including appendonly and appendfsync)](http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/ParameterGroups.Redis.html)
