const express = require('express')
const router = express.Router()
const burger = require('../models/burger.js')
const app = express()

app.use(express.static('public'))


router.get('/', function(req, res) {
    burger.sellectAll(function(data) {
        const handleBarObject = {
            burgers: data
        }
        console.log(handleBarObject)
        res.render('index', handleBarObject)
    })
})

router.post('/burger/create', function(req, res) {
    burger.insertOne(req.body.burger_name, function() {
        res.redirect('/')
    })
})

router.post('/burger/eat', function(req, res) {
    burger.updateOne(req.body.id, function() {
        res.redirect('/')
    })
})

router.post('/burger/restore', function(req, res) {
    burger.restoreOne(req.body.id, function() {
        res.redirect('/')
    })
})

module.exports = router





