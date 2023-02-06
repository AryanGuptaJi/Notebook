const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const { computeHeadingLevel } = require('@testing-library/react');

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
    // Check wheter the user with email exists already
    try{
      let user = await User.findOne({email: req.body.email});
      if(user){
        return res.status(400).json({error: "Sorry a user with this email already exists"})
      }
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }).then(user => res.json(user))
      // res.json(user)
    }
    catch(error){
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
}) 

module.exports = router