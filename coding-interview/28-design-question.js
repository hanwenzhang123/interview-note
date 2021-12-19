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
    
