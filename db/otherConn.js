const { MongoClient } = require("mongodb");

//This connects to the cluster
const uri =
  "mongodb+srv://sterlingjstokes:dogyellsloud@cluster0.2zhba.mongodb.net/post?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");

    const query = {title: "Batman"};
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    await client.close();
  }
}

run()