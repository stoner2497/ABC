const express = require('express');
const Router = express.Router();


Router.get('/',(req,res) => {
    res.json('user route')
})

module.exports = Router;