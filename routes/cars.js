const express = require('express')
const router = express.Router()

const Car = require('../models/Car')


router.get('/', (req, res) => {
    Car.find()
        .then(cars => res.json(cars))
        .catch(error => res.status(500).json(error))
})

router.post('/new', (req, res) => {
    const addCar = new Car({
        manufacturer: req.body.manufacturer,
        model: req.body.model
    })

    addCar
        .save()
        .then(result => res.json(result))
        .catch(error => res.status(500).json(error))
})

router.put('/edit/:id', (req, res) => {
    const newData = { manufacturer: req.body.manufacturer, model: req.body.model };

    Car.findOneAndUpdate({ _id: req.params.id }, newData, { new: true })
        .then(car => {
            res.json(car);
        })
        .catch(error => res.status(500).json(error));
});

router.delete('/delete/:id', (req, res) => {
    Car.findOneAndDelete({ _id: req.params.id })
        .then(car => {
            res.json(car);
        })
        .catch(error => res.status(500).json(error));
});

module.exports = router