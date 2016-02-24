## Deploying Redis to Heroku

###### You will need to clone [this](https://github.com/daUnicorns/redis-connections) Git Repo

### Setting up a haroku account

Go to htts://signup.heroku.com/login and follow the steps to set up an account ( it's free!! =) and easy). Once you have logged in you can move onto the next step.

### Verifying your Heroku

You will need to go to Settings and 'verify' (add your card details to Heroku) your account. You will not be charged for this but you cannot use the REDIS_URL without it unfortunately.

### Installing the CLI plugin

Start by opening the command line and installing the CLI plugin shown below.

<img width="749" alt="screen shot 2016-02-23 at 09 42 40" src="https://cloud.githubusercontent.com/assets/15571853/13247607/6435f95c-da12-11e5-93f5-d729304a6a25.png">

Once this is done you will need to get the heroku-redis add on. The command for this is shown below again.

When you have done this you will need to enter heroku config to retrieve the REDIS_URL that you will need in order to be able to deploy redis to heroku.

When you have the code, copy it from the command line into your config.env file.

<img width="745" alt="screen shot 2016-02-23 at 09 43 20" src="https://cloud.githubusercontent.com/assets/15571853/13247608/64473bd6-da12-11e5-98cf-03e569b4a3b4.png">

The next step is to go back to the command line and install redis as shown below.


<img width="753" alt="screen shot 2016-02-23 at 09 43 46" src="https://cloud.githubusercontent.com/assets/15571853/13247609/64503934-da12-11e5-9ed4-6708383c3cd6.png">

Once you have this you will need to go to the redis.js file and complete the rest of the client variable.

This is all you will need to do in atom. Easy right!! 👍

### Deploying the APP to Heroku

The next step is to depoy the app to Heroku. You will need to go back to your terminal and enter a few commands to do this.
[This](https://www.youtube.com/watch?v=uLF_hmtxAsY) video is very concise and explains it better than I could.

The final step will be the command 'git push heroku master'. When this step is finished you will be given a URL in the terminal which you can copy into your internet browser.

<img width="562" alt="screen shot 2016-02-23 at 12 21 32" src="https://cloud.githubusercontent.com/assets/15571853/13251417/0599ce26-da28-11e5-974f-5c44a1476c63.png">
