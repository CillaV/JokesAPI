const mongoose = require("mongoose");


const dbName = "jokes";

mongoose.connect("mongodb://localhost/" + dbName, {
    useNewUrlParser:true,      // removes deprecation messages in terminal
    useUnifiedTopology:true
})
    .then(()=>{
        console.log(`You are connected to the ${dbName} database`) // validate connection
    })
    .catch((err)=>{
        console.log(`Error connecting to ${dbName} database`) // validate any errors
        console.log(err)
    })