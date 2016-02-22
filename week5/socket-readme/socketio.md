# Socket.io

Start by Installing
> $ npm install socket.io

Make an `index.html`, this is what it should look like

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <script src="/socket.io/socket.io.js"></script>
        <script>
          var socket = io('http://localhost');
          socket.on('news', function (data) {
            console.log(data);
            socket.emit('my other event', { my: 'data' });
          });
        </script>
    </body>
</html>
```

Create a file called `app.js`, this will be your server

```javascript
var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(80);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
```

For the other advanced options see the other methods that you can use [here](http://socket.io/docs/server-api/) for commands on the server side and [here](http://socket.io/docs/client-api/) for commands on the server side
