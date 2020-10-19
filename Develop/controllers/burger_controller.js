const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();
console.log("test");

router.get("/", (req, res) => {
    // res.render("index");
    console.log("index");
    res.end('test');
    // res.render("index", hbsObject)
});

router.get("/api/", (req, res) => {
   console.log("api"); 
});

module.exports = router;