// import controller
const JokeController = require("../controllers/jokes.controller");


module.exports = (app) => {

    app.get('/api/jokes', JokeController.getAllJokes);

    app.post('/api/jokes', JokeController.createNewJoke);

    app.get('/api/jokes/:id', JokeController.getOneJoke);

    app.put('/api/jokes/:id', JokeController.updateJoke);

    app.delete('/api/jokes/:id', JokeController.deleteJoke);

}