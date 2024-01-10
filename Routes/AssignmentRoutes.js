const {getAssignments,sendMail, getAssignmentsByOrg, createAssignment, deleteAssignment,updateScore} = require('../Controllers/AssignmentController.js');
const authenticateToken = require("../Utils/authenticateToken.js")
const express = require("express");
const router = express.Router();


router.get('/',authenticateToken, getAssignments);
router.get('/:id',authenticateToken, getAssignmentsByOrg);
router.post('/create-new',authenticateToken, createAssignment);
router.delete('/:id',authenticateToken, deleteAssignment);
router.post('/sendmail',authenticateToken, sendMail);
router.post('/attempted/:id',authenticateToken, updateScore);

module.exports = router;