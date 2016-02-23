var redis = require('redis');
// creating 3 separate instances of redis
    pub  = redis.createClient(), // client1
    sub1 = redis.createClient(), // client2
    sub2 = redis.createClient(); // client3

// adding event listeners to the subscribers
// event upon subscribe(channelName)
sub1.on('subscribe', function(channel, count) {
    console.log("Subscriber 1 subscribed to " + channel + ". Now subscribed to " + count + " channel(s).");
});
// event upon unsubscribe(channelName)
sub1.on('unsubscribe',function(channel,count){
    console.log('Subscriber 1 has unsubscribed from '+ channel + ". Now subscribed to "+ count + " channel(s).");
    // if no subscriptions the client will be terminated
    if(count==0){
        sub1.end();
        console.log("client has exited.");
    }
});
// event upon receiving message in a given channel
sub1.on('message', function(channel, message) {
    console.log("Message from channel " + channel + ": " + message);
});
// repeating for subscriber2
sub2.on('subscribe', function(channel, count) {
    console.log("Subscriber 2 subscribed to " + channel + ". Now subscribed to " + count + " channel(s).");
});
sub2.on('unsubscribe',function(channel,count){
    console.log('Subscriber 2 has unsubscribed from '+ channel + ". Now subscribed to "+ count + " channel(s).");
    // if no subscriptions the client will be terminated
    if(count==0){
        sub1.end();
        console.log("client has exited.");
    }
});
sub2.on('message', function(message) {
    console.log("Message from channel : " + message);
});

// this is how to subscribe to a channel
sub1.subscribe('notify me please');
// this is how to publish messages in a channel
pub.publish('notify me please','you have 1 new notification');

// same here
sub2.subscribe('no-notifications-please');
pub.publish('no-notifications-please', 'I will spam you anyway');

// number of channels the client is subscribed to will vary
sub1.subscribe('newsfeed');
sub2.subscribe('keep my buzz going');

// client should not receive messages from here on
sub1.unsubscribe('notify me please');
sub1.unsubscribe('newsfeed');

sub2.unsubscribe('no-notifications-please','keep my buzz going');
