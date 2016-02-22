## Redis Persistence

Redis is super-fast in part because it is an *in-memory datastore*. This means that it relies on main memory (RAM), as opposed to disk storage. However, often this memory will not be saved if the device loses power or there is some other failure. This mean the data is not very secure, and Redis databases may have poor *durability*.

* **Durability**: is the property which **guarantees that transactions that have committed will survive permanently**. For example, if a flight booking reports that a seat has successfully been booked, then the seat will remain booked even if the system crashes.

However, fear not: Redis offers two ways to ensure that data is regularly made 'safe', so that it is not lost in case of a failure.

### 1. RDB Snapshotting
This produces 'point-in-time snapshots' of the dataset when certain conditions are met. These conditions can be set by the user. E.g. the user can tell Redis to take a snapshot either if the last snapshot was more than 2 minutes ago, or if there are at least 100 new writes.
This is good because it provides an easy way to backup the whole database. You can archive these snapshots and revert to them at any point in the future. However, in event of a failure you will still lost SOME data, even if it is only a few minutes' worth. So, ideally you should also use the second persistence option offered by Redis:

### AOF (Append only file)
This is Redis' main persistence option. It works by logging every write operation that modifies the database. Thus, if there is a failure, Redis restarts and replays the operations in the log, which reconstructs the database to where it was before the failure.

There are three sub-options available under AOF, which the user can choose according to their priorities in terms of durability and speed:

* No fsync: fastest option, but this means that your operating system will choose when to sync - not very safe at all.
* fsync everysec: syncs every second. Still very fast, but you could lose a second of data in event of failure. This is the default option.
* fsync always: syncs every option. Maximum safety, but probably quite slow unless you have very few writes.