require('dotenv').config();
const express = require("express");
const app = express();

//? How does this import work
const connectionToDatabase = require("./db/conn");
connectionToDatabase();
//Gets the env port to index.js or uses a backup port
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})

