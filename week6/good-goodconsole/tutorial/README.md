# Setting up Good and Good-console

This tutorial will guide you through setting up Good and Good-console. If you get stuck you can check out [the solution here](./working-server.js).

## 1. Clone this repo

## 2. Install Good and Good-console
```
npm install good good-console --save
```

## 4. Install dependencies

```
npm install
```

## 3. Open server.js and create an options object
A basic server has been set up for you using Hapi. Your options object should specify your reporter and events to listen for. See this [README](../README.md) for an example.

Set Good to listen for all responses only.

## 4 Register Good

We're going to pass the register method two parameters:
the plug-in and a callback

### The plug-in
When you register Good, you are requiring ```'good'``` and setting the options key to the object you created in Step 3. See this [README](../README.md) for details.

### The callback

Your callback takes `error` as a parameter. The body of your callback will contain all your routes.

## 5. Create two routes
Create routes for a homepage and an about page. The reply can be any string. Your routes should go in the body of the callback function of your register.
