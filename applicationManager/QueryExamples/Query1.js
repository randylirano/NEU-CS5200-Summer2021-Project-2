// Query1: (10pts) How many tweets are not retweets or replies?

const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    // define database to be used
    const database = client.db("ApplicationManager");
    // define collection from database to be used
    const tweetCollection = database.collection("Posting");

    // query tweets that are not retweeted
    const query = { 
    //   "retweet_count": {$lte: 0}
    };

    // get an array of the query result
    const queryResults = await tweetCollection.find(query).count();

    // if ((queryResults.length) === 0) {
    //   console.log("No documents found!");
    // } else {
    //   console.log(queryResults.length);
    // }

    console.log(queryResults);

  } finally {
    await client.close();
  }
}
run().catch(console.dir);