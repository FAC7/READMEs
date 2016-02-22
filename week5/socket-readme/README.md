# WebSockets

## What are WebSockets?

Websockets provide an always on connection between a client and a server that both parties can use to send data at any time.

## How are they different from HTTP requests?

WebSockets is better for situations that require low-latency communication. For example chat applications or games. This is because to establish a connection between a sever and a client a handshake process is needed. This can be thought of as the computers greeting each other. Both HTTP and WebSockets have equivalent sized initial connection handshakes, but with a WebSocket connection the initial handshake is performed once and then small messages only have 6 bytes of overhead. With a HTTP request the overhead in each message comes from the size of the headers and also from the logic to handle and parse this headers. As a header is required with each message, this makes HTTP very slow compared to sockets.

## Socket.io

Socket.io enables real-time event-based communication.

Why are they used?

Socket.io's capabilities consist of:

* Real-time analytics:
Push data to clients that gets represented as real-time counters, charts or logs.

* Binary streaming:
Starting in 1.0, it's possible to send any blob back and forth: image, audio, video.

* Instant messaging and chat:
Socket.IO can be used to make a chat app in just a few lines of code.

* Document collaboration:
Allow users to concurrently edit a document and see each other's changes.

For more about setting socket.io see [here](socketio.md)

## Resources

* Dwyl [tutorial](https://github.com/dwyl/hapi-socketio-redis-chat-example) that takes chat application from last week further by using Redis.

* Great [stackoverflow](http://stackoverflow.com/questions/14703627/websockets-protocol-vs-http) discussion on WebSockets.

* http://www.tutorialspoint.com/html5/html5_websocket.htm

* http://socket.io/docs/
