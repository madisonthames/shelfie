const express = require('express');
const app = express();
const massive = require('massive')
const controller = require('./controller');
require('dotenv').config()

const {SERVER_PORT} = process.env
const {CONNECTION_STRING} = process.env

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('It worked!!! Woohoo!!!')
})

app.use(express.json());

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on ${SERVER_PORT}`)
})