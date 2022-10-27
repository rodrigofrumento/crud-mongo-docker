const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

app.use(bodyParser.json())

const cars = require('./routes/cars')
app.use('/api/cars', cars)

mongoose
    .connect('mongodb://db:27017/crud-docker', {
        useNewUrlParser: true
    })
    .then(result => {
        console.log('Mongodb Connected')
    })
    .catch(error => {
        console.log(error)
    })

app.listen(9000, () => console.log('Server listen on PORT: 9000'))