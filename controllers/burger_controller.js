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

router.put("/", (req, res) => {
    // console.log(req.body);
    res.end();
})

router.get("/api/", (req, res) => {
   console.log("api"); 
});


module.exports = router;