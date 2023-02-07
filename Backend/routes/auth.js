const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { computeHeadingLevel } = require('@testing-library/react');

const JWT_SECRET = 'Aryanisagoodboy';

// Create a User using: POST "/api/auth/createuser". No login required.
router.post('/createuser',[
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast five characters').isLength({ min: 5 })
], async (req, res)=>{   
  // If there are errors, return Bad request and th errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    try{
      // Check wheter the user with email exists already
      let user = await User.findOne({email: req.body.email});
      if(user){
        return res.status(400).json({error: "Sorry a user with this email already exists"})
      }
      const salt = await bcrypt.genSalt(20);
      const secPassword = await bcrypt.hash(req.body.password, salt);
      // Create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword
      }).then(user => res.json(user))

      const data ={
        user:{
          id: user.id
        }
      }
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json(user);
      // res.json({authToken})
    }
    catch(error){
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
}) 

module.exports = router