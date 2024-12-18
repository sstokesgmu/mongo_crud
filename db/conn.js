const {MongoClient} = require("mongodb");

const connectionString = process.env.MONGO_URI || "";
const client = new MongoClient(connectionString);

let conn;
let db;

async function connectionToDatabase() {
    try {
        conn = await client.connect(); 
        db = conn.db("sample_mflix");
        console.log("Connected to database");
    } catch(e) {
        console.error("Failed to connect to MongoDB:", e);
    }
}

module.exports = connectionToDatabase