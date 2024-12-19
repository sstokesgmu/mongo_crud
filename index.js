require('dotenv').config();
const express = require("express");
const app = express();

//Gets the env port to index.js or uses a backup port
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})