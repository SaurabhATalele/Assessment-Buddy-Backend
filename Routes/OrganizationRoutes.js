const express = require('express');
const router = express.Router()
const { createOrganization, renameOrganization, deleteOrganization } = require('../Controllers/OrganizationController.js');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const secretKey = process.env.SECRET_KEY;

const authenticateToken = (req, res, next) => {
    var token = req.headers['authorization'];
    const data = token.split(' ');
    token = data[1];
    if (!token || data[0] != 'Bearer') {
      return res.sendStatus(401); // Unauthorized
    }
  
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }
  
      req.user = user;
      next();
    });
  };
router.post('/create',authenticateToken, createOrganization);
// router.get('/get/', getOrganizations);
router.patch('/rename/:id',authenticateToken, renameOrganization);
router.delete('/delete/:id',authenticateToken, deleteOrganization);

module.exports = router;
