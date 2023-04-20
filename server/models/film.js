const mongoose = require('mongoose')

const filmSchema = new mongoose.Schema({
    rank: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    certificate: {
        type: String,
        required: true,
    },
    run_time: {
        type: String,
        required: true,
    },
    tagline: {
        type: String,
        required: true,
    },
    budget: {
        type: String,
        required: true,
    },
    box_office: {
        type: String,
        required: true,
    },
    casts: {
        type: String,
        required: true,
    },
    directors: {
        type: String,
        required: true,
    },
});

const FilmModel = mongoose.model('films', filmSchema)

module.exports = FilmModel
