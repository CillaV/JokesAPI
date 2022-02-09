// imports model from models folder
const Joke = require('../models/jokes.model');


module.exports= {

    // All Jokes
    getAllJokes: (req, res) =>{
        Joke.find()
        .then((allJokes) =>{
            console.log(allJokes)
            res.json(allJokes)
        })
        .catch((err)=>console.log(err))
    },

    // One Joke
    getOneJoke: (req, res) =>{
        Joke.findOne({_id: req.params.id})
        .then((oneJoke) =>{
            console.log(oneJoke)
            res.json(oneJoke)
        })
        .catch((err)=>console.log(err))
    },
    
    // Create a Joke
    createNewJoke: (req, res) =>{
        Joke.create(req.body)
        .then((newJoke) =>{
            console.log(newJoke);
            res.json(newJoke)
        })
        .catch((err)=>console.log(err))
    },

    // Update a Joke
    updateJoke: (req, res) =>{
        Joke.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true} 
            // return newly updated document instead of new document
            // validations only default on post and not put - thus added
        )
        .then((updatedJoke)=>{
            console.log(updatedJoke)
            res.json(updatedJoke)
        })
        .catch((err)=>console.log(err))
    },

    // Delete a Joke
    deleteJoke: (req, res) =>{
        Joke.deleteOne({_id: req.params.id})
        .then((deletedJoke)=>{
            console.log(deletedJoke)
            res.json(deletedJoke)
        })
        .catch((err)=>console.log(err))
    }


}