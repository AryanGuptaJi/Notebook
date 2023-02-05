const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create a User using: POST "/api/auth/". Doesn't require Auth
router.post('/', async (req, res)=>{    
    console.log(req.body); 
    const user =await User(req.body);
    await user.save();
    res.send(req.body);
}) 

module.exports = router