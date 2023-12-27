// import express from 'express';
// import { loginUser,registerUser } from '../Controllers/UserController.js';
const express = require('express');
const { loginUser,registerUser } = require('../Controllers/UserController.js');
const router = express.Router();

router.post('/register',registerUser);
router.post('/login',loginUser);

module.exports =  router;