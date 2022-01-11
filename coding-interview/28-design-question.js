High Level Notes
- there is no right answers
- every interviewer will expect a different answer
- focus is usually on the data model
- do not mention specific technologies
- draw stuff
- talk

How Would You Design Twitter/Facebook/Instagram?
- identify two core features
- possible implementation
- identify and address difficulties
- solutions for scaling

//Example
//core features
how tweeting works? how user creates tweets?
user feeds? how user feeds put together?
  
//possibile implementation
could be everything from the Web interface.
- when a user clicks on that tweet button, what should really happen?
- what happens when we send a request to the backend server to create a new tweet.
database implementation
- what fields a tweet and the database has?

//identify and address difficulties
//tweeting
- what does a tweet look like in the database?
- how to make the #topic and @mention systems?
- how to implement retweets?
//feed
- how to show interesting tweets at top of feed?
  
how those two features would work once we start getting hundreds of thousands or millions of users?
//solutions for scaling
- caching 
- deployment options (deployment architecture)

//caching 
user -> server (memory store) -> database
when first come to our server, maybe we will get a list of tweets out of our database,
  and we will run some expensive algorithm on the server to calculate this user feed,
    like calculate the top 10 tweets that we want to show this user.
  And then we could send those 10 tweets back to the user 
  and then simultaneously also take that top 10 list of tweets 
  and store it in some memory store like Memcache or redius.
  Then any time that this same user comes back, like in the next five minutes or something,
    rather than going back to the database and pulling out our base list of tweets again and running that
    expensive algorithm again, maybe we just go right back to that memory store, pull out the previous
    feed that we had just calculated and send it back to the user.
    And so this is the idea of caching, doing some expensive work one time, storing the results and then
    reusing that result as soon as we need to recalculate it again.
    
//deployment options (deployment architecture)
 => create a load balancer
         user
           |
     load balancer  
    |      |     |
 server server server
    |      |     |  
        database
We could say that for a given user, maybe we are not able to satisfy a million different users with a single machine running our server.
So a easy way to approach this would be to say that we are going to create a load balancer.
Whenever a user makes a request to our application, it will go to this load balancer and then the load
balancer will randomly assigned that request to any one of a number of different identical servers.
And so we could have many different servers that are completely invisible to the user and any one of those servers can handle given request and respond back.
And so this would be an example of horizontal scaling for our application.
    
// Systems Design Interview Concepts - Techlead
1. HTTP Load-balancer (web server)
  - helps to distribute traffic to many different web servers in order to help with scalability
  - put a load balancer in front of the request and that load balancer will route the client request to a number of different web servers
  - nginx (software), DNS load balancing (have that website resolve to a number of different IP addresses) 
2. Caching
  - handle lots of reads and writes, insert a caching layer and cache the results of that request
  - in-memory cache is very fast to access, can have cache last like 24 hours or so
  - Memcached, Redis, Apache Cassandra
  - Redis - in-memory data structure store (server), used as a NoSQL key–value persistent database, cache, and message broker.
3. CDN content delivery network (image/video server)
  - A global network, to cache and static asset files like images, video, JS files, HTML, CSS files
    - decrease the load on your actual server, access content very fast for users
    - pull technique: first time may be slow due to fetch and cache, then subsequent users within the local region can access quickly
  - Distributed system like amazon s3 (Cloud Object Storage) for uploading images
4. Slave-master replications
  - a single master database where you write into and then cloned duplicated into many slave databases where you only read from
  - use case like the user updated the profile and wants to see the changes right away
5. Database schema design
  - what tables are you going to use? primary key? indices?
  - database indexes are important becase they make your queries fast
6. Database sharding (database server)
  - split up the database into multiple master database
  - vertical sharding - take each table and just put it into a new machine (like user table, comment table, user support table, chat table)
  - horizaontal sharding - take a single table and split that across multiple machines
7. NoSQL Database
  - key value pairs model able to scale themselves easily across multiple different machines easily
  - MongoDB, Amazon Dynamodb, Firebase
8. API design
  - how are the client and server communicate each other? What are the methods and functions they use?
  - what is the data transport mechanism? are you using JSON or protocol buffer?
  - how do you handle security? for offline usage, how do you make it fast?
  - the simpler you can keep the system, the better

 
