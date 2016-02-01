# Apigee

Apigee is a cloud service with an API for you to store data and add new features to your apps, despite this large backend capability,

I will be addressing the console which I have found to be a great reference point for API request urls and API methods,

It is also good for testing if your api request is working and what json object is being sent back

but I found it difficult to use. I guaged a feeling that apigee has a lot of potential,

and it is mainly for using API's with your apps you have set up and storing information in the apigee cloud.

## Set up

Visit [Apigee](https://accounts.apigee.com/accounts/sign_up) to sign up!

You will be confronted by this page ![](http://postimg.org/image/4p352ab0b/)

( if you are not confronted go to [https://accounts.apigee.com/accounts/dashboard#/](https://accounts.apigee.com/accounts/dashboard#/))

## Dashboard options

Out of the 4 dashboard options, api management and insights needs you to 'activate' your account which takes authorization from their customer services.

API BaaS is about storing your app data on the apigee cloud. So, I will be addressing the API consoles section

## Apigee API console

Choose api consoles and you can now choose which api you would like to get data from, there are 82 applications to choose from

After clicking on your favorite one you will be confronted by the consoles

For my example I will be using the [github console](https://apigee.com/resources/github)

On the left you will have a list of API HTTP requests which are classified with an API method: GET, POST, PUT, DELETE

There are also two authentication modes you can be in: no auth and 0auth 2

For 0auth 2, we are confronted with [a github authorization page](https://github.com/login/oauth/authorize?response_type=code&scope=user%2Cpublic_repo%2Crepo%2Cgist&redirect_uri=https%3A%2F%2Fapigee.com%2Foauth_callback%2Fgithub%2Foauth2CodeCallback&client_id=354481eece42917ed65f)

You can click authorize application,
then you will then be in github-authenticated user mode and will have the ability use more API methods,
eg. get json objects for repositories

Example get methods for github:
https://api.github.com/repos/fourloops/FourLoopsBlog
https://api.github.com/users/JMurphyWeb

Example get methods for facebook:
https://graph.facebook.com/sam.houston.1000 - couldn't get it working

## Resources

http://docs.apigee.com/

https://apigee.com/resources/github
