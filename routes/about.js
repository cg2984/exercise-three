//dependency
const express = require("express");

//setting up by 
const router = express.Router();

//this route is being exported and goes to the root
router.get('/',(req,res) => res.send("my about page"));
route.get('/me', (req,res) => res.send('about me'));

module.exports = router;