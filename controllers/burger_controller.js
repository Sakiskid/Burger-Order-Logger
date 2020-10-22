const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get("/", (req, res) => {
    burger.all(function (data) {
        let hbsObject = { burgers: data };
        res.render("index", hbsObject)
    });
});

router.post("/", (req, res) => {
    burger.insert(req.body.burgerName, function (data) {
        res.end();
    })
})

router.put("/", (req, res) => {
    burger.update(req.body.id, req.body.eaten, function(data) {
        res.end();
    })
});

router.delete("/", (req, res) => {
    burger.delete(req.body.id, function(data) {
        res.end();
    });
});


module.exports = router;