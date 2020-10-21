const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();
console.log("test");

router.get("/", (req, res) => {
    burger.all(function (data) {
        let hbsObject = { burgers: data };
        res.render("index", hbsObject)
    });
});

router.post("/", (req, res) => {
    console.log("Post req.body:", req.body.burgerName);
    burger.insert(req.body.burgerName, function (data) {
        res.end();
    })
})

router.put("/", (req, res) => {
    burger.update(req.body.id, function(data) {
        res.end();
    })
});

router.get("/api/", (req, res) => {
   console.log("api"); 
});


module.exports = router;