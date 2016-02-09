
# What is server side testing?

Server side testing is a type of software testing for the applications that run on a server. It is designed to test the parameters of the client side after delivering to the server.

### How does npm module tape work?

You have to `require ('tape')` in your test files.

<img width="480" src="https://cloud.githubusercontent.com/assets/15571853/12916367/c8ea747a-cf29-11e5-9e18-b51fa4f833f2.png">

You need to have `tape` in your `devDependencies` and you need to have the path to your test file.

<img src="https://cloud.githubusercontent.com/assets/15571853/12916461/946484d8-cf2a-11e5-80c5-086c5f951692.png">

<img width="384"  src="https://cloud.githubusercontent.com/assets/15571853/12916463/9ec97500-cf2a-11e5-878a-c36777e5c995.png">

Once you have written some tests you can run them in the command line with the command `npm test`.

### What other kind of tests would you want to write for Node?

#### Unit testing

Here is an example of TDD using `Tape`. We are testing to make sure that the page in question has loaded.

###### The test (do tests first)
<img src="https://cloud.githubusercontent.com/assets/15571853/12918553/a29bd7e2-cf37-11e5-8a52-961e168b42c8.png">

###### The code
<img src="https://cloud.githubusercontent.com/assets/15571853/12918554/a2b5dbc4-cf37-11e5-9fde-bbfe422939e7.png">


#### Continuous integration

Continuous integration is the process of merging development work with the master several times a day / constantly. This helps:

* catch issues early
* prevent "integration hell"


Unlike unit testing which tests a certain behavior (e.g. a function), continuous integration is used to test whole projects and makes sure that everything runs well together.

You can use something like Travis CI for this. Travis CI is a free and open-source software service used to build and test software projects.

### What is nodemon?

Nodemon is a service that will automatically restart your server whenever you have made a change to your source.

You just need to run your code with nodemon instead of node and it will do the aforementioned restarts. An example would be

`nodemon randomFileName.js`

It can be installed by writing the following code into your terminal.

  `npm install -g nodemon`

### Resources

[NPM tape documentation](https://www.npmjs.com/package/tape#preloading-modules)

[Tape Guide](https://ci.testling.com/guide/tape)  

[Why Tape]( https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4#.d26teyc92)

[Continuous Integration by Elias]( https://github.com/FAC7/READMEs/blob/master/week2/unit-integration/continuous-integration/learn-ci.md)
