const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const FilmModel = require('./models/film')
const fs = require('fs');
const csv = require('fast-csv');
const path = require('path');
const dotenv = require('dotenv');

app.use(express.json())
app.use(cors())
dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

// const URI = 'mongodb://localhost:27017/chmury_db'
const URI = `mongodb+srv://${USERNAME}:${PASSWORD}@chmury.nld1lwn.mongodb.net/?retryWrites=true&w=majority`

// Connect to MongoDB
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('CONNECTED TO DATABASE');
  })
  .catch((e) => console.error(e));

// Get all films
app.get('/films', async (req, res) => {
    const films = await FilmModel.find();
    res.json(films);
})

app.listen(3001, '0.0.0.0', ()=> {
    console.log('Server is running on port 3001')
});