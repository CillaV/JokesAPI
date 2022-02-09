const mongoose = require("mongoose");


const JokeSchema = new mongoose.Schema({

    // _id field created automatically each time new document created in collection

    setup: {
        type: String
    },
    
    punchline: {
        type: String
    }

}, {timestamps: true})
    // automatically creates createdAt and updatedAt with date and time

const Joke = mongoose.model("Joke", JokeSchema);
    // will create collection name based on key but will be lowercase and plural

module.exports = Joke;