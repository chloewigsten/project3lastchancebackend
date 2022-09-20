const express = require('express');
const cors = require('cors');

const display = require('./display.json')
const show = require('./show.json')

const app = express();

app.use(cors());

app.get('/', (req,res) => {
    res.send("Hello world")
})

app.get('/display', (req,res) => {
    res.json(display);
})

app.get('/show', (req,res) => {
    res.json(show)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));