// import dependencies and set express method to variable
const express = require("express");
const jokesRoutes = require("./routes/jokes.routes");
const app = express();
const port = 8000;



// express middleware

app.use(express.json());

app.use(express.urlencoded({extended: true}));


// connect to database
require("./config/mongoose.config");


// logic

const jokeRoutes = require("./routes/jokes.routes");
jokeRoutes(app);

// shorthand
// require("./routes/jokes.routes")(app);





// running server
app.listen(port, ()=> console.log(`Server is connected on port ${port}`))
