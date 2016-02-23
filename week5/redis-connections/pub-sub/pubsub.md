## REDIS PUB/SUB

### WHAT IT IS
PUB/SUB stands for **SUBSCRIBE**/**PUBLISH**. Together with ```UNSUBSCRIBE```, such commands implement the Publish/Subscribe messaging concept, where publishers send their messages to a a specific channel and subscribers are receivers listening on the channel. This allows for decoupling of publishers from subscribers who can express interest in one or more channels, without the parties necessarily knowing about each other. This ultimately results in a dynamic and more scalable network.

### WHEN/WHY IT IS USEFUL
REDIS allows multiple servers (e.g. serving different pub/sub channels) to communicate accross different instances of an app.
![non-communicating](assets/non-communicating.png)
multiple servers in different app instances without Redis
![communicating with Redis](assets/communicating.png)
multiple servers in different app instances with Redis

### PUB/SUB EXAMPLE ON CLI
Try out the PUB/SUB methods on your command line with the following steps. If you haven't already, [install redis](http://redis.io/topics/quickstart#installing-redis).
1. Create an instance of redis on your command-line with ```redis-server```. If you get a message as in the picture, an instance of redis is already running on the same port you are trying to access.
![error-server-already-running-on-same-port](assets/redis-server-already-in-use.png)
2. Open a new tab on your CLI (```CMD+T``` on Mac) and create a new instance of Redis Client by typing ```redis-cli```. Do the same twice on new tabs and create 2 further instances of Redis client. *For convenience these 3 Redis client instances will be named* **client1**, **client2** and **client3**.
3. **client1** will be the **"*subscriber*"** of a new **channel** called ```'notify me please'```. Type ```subscribe 'notify me please'```. The argument after the ```subscribe``` command is the name of the chat. If such name does not correspond to an existing channel on the redis server, a new channel will be created.
4. **client2** will be the **subscriber** to a different chat. Try typing ```subscribe no-notifications-please```. Note that ```''``` or ```""``` are required only for multi word arguments.
5. **client3** will be the "**publisher**".
    * Try typing something like: ```publish 'notify me please' 'you have 1 new notification'```. Switch to the other client tabs and check if what you expected happened. The **publisher** will also show the number of subscribed clients.
    * Try typing something like: ```publish no-notifications-please 'I will spam you anyway!'``` and check the other client tabs.

### PUB/SUB ON NODE.JS
Check out the javascript code on pubsub.js

### REFERENCES
* [PUB-SUB Wiki](https://en.wikipedia.org/wiki/Publish–subscribe_pattern)
* [Official Redis PUB/SUB](http://redis.io/topics/pubsub)
* [PUB-SUB Ex.](http://www.rediscookbook.org/pubsub_for_asynchronous_communication.html)
* [Another PUB/SUB Ex.](https://github.com/NodeRedis/node_redis/blob/master/examples/pub_sub.js)
