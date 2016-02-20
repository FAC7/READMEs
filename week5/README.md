# Week 5 Learning Outcomes

Split up into groups of four (one person from each team). Each team should tackle one of the following topics:

## Redis data structures & folder structure

#### Redis data structures
There are a lot of data structures contained in Redis but you haven't had the chance to use many, so we want you to do a bit more research into them and recommend the most useful ones. We particularly want you to look into:

* [ ] Lists
* [ ] Sets
* [ ] Sorted sets
* [ ] Hashes

#### Folder structure
There has been a bit of confusion about how teams should organise their code so please do some research and recommend a solid folder structure. A good way would be to look at existing projects on GitHub and analyse their folder structure.

* [ ] What are some common ways of organising your files?
* [ ] Give some examples of repos with different folder structures. Do you understand why they have been organised like that?
* [ ] How many files should be in your root folder?
* [ ] Can you recommend some best practices for how your folder's tree structure should look?
* [ ] What are the best practices for the naming of files?

## Redis connections and best practice

#### Connections

* [ ] How can Redis be deployed to Heroku? Recommend a method.
* [ ] What is Redis Pub/Sub and when is it useful? (scaling applications)
* [ ] What are Redis connections and why can they be troublesome?
* [ ] Why is dwyl's redis-connection the best thing since sliced bread?

#### Redis Best Practice

* [ ] What is persistence and why is this important for databases?
* [ ] What are the different ways of achieving persistence with Redis? Which should you use?
* [ ] Why might you need to optimize Redis?
* [ ] Provide some examples of Redis optimization?


## Websockets & script injections

#### Websockets

We want our web apps to have real-time functionality (because who doesn't these days?) so you'll need to research a bit about websockets:

* [ ] What are websockets?
* [ ] Why are they used?
* [ ] How are they different from HTTP request/response patterns you've seen before?

#### Script Injections
Now that you're using databases, you're opening your web apps up to some serious security vulnerabilities, one of which is script injections.

* [ ] What are HTML script injections?
* [ ] What are some examples?
* [ ] How can you protect against them in your apps?


## Mocking & testing
#### Mocking
Some people like to mock databases for the purposes of testing; we suggest having a debate on the pros and cons of mocking.

* [ ] What does mocking mean in relation to testing?
* [ ] What are some advantages and disadvantages of mocking?
* [ ] Why might it be unreliable?
* [ ] How might you mock a redis database?

#### Testing
* [ ] How can you test your Redis database fully without mocking?
* [ ] How do you ensure you don't fill your database with test insertions?
* [ ] How do you test for error cases?
* [ ] Why do Redis Connections affect tests?(See Dwyl Redis-connection)


## Task for all: write a README summarising your research on these topics.
