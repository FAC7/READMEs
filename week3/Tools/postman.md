# What is Postman?
Provides an easy to use and clean interface for quickly making requests to API's. Can also be used to test an API that you are creating.


## Download Postman
Download the [chrome app](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) or this [chrome extension](https://chrome.google.com/webstore/detail/postman-rest-client-short/mkhojklkhkdaghjjfdnphfphiaiohkef?hl=en) if you want use in the browser.  A [Mac app](https://www.getpostman.com/docs/install_mac) is also available.

![](https://lh5.googleusercontent.com/RxigfhIpqUYkHUv_zP-csQYthgQZPsml1oQAO-ogegWf7reZn-qzaScilsWLVBDjGC0G35rl=s640-h400-e365)


## The Basic Flow

 1. Download the Postman app.

 2. Select the desired method (GET/POST/DELETE/PUT) and paste the request URL.

 3. Add the parameters that you want and authorisation keys if required

 4. Send

## An example finding user Sam Houstan's data from Github's API

 1. Select 'GET'

 2. Paste Github's user request URL, followed by Sam's username: api.github.com/users/shouston3

 3. Investigate the data in the neatly packaged JSON object provided.



## Homework

Create a Twitter Application which allows you send get/post/delete requests via Twitter's API. Post a tweet @JMurphyWeb using Postman.

[Follow this handy tutorial (15 mins)](https://www.youtube.com/watch?v=fhPb6ocUz_k)

 1. Create a demo [TwitterApp](https://apps.twitter.com/)
 2. Note the *Consumer Key and Consumer Secret* (for accessing making requests to Twitter API)
 3. Generate *Access Token and Access Token Secret* (for accessing and posting to your account)
 4. Copy the above information into Postman's **Oauth1** tab
 5. Write any 32 characters in the **nonce** field
 6. **Check** the *Add params to header* box and click **Update Request** button
 7. Find the Resource URL from [Twitter's Documentation](https://dev.twitter.com/rest/reference/post/statuses/update) for the specific task that you want to do (in this example - update status) and note any required fields (status - aka your tweet)
 8. Choose **POST**, copy the URL, from the documentation above, into the field, add a 'status' parameter and a tweet of your choice in the field
 9. Click **Send**.



__________
## Collections

Use collections tab to save calls to GET/POST/PUT/DELETE to your app's API for quick access and testing.



### Resources
[In-depth review & guidance](http://www.programmableweb.com/news/review-postman-client-makes-restful-api-exploration-breeze/brief/2014/01/27) to using postman.

[Programmable Web](http://www.programmableweb.com/)
finding api's

See the [documentation](https://www.getpostman.com/docs/) for a 'getting started' guide and further information.
