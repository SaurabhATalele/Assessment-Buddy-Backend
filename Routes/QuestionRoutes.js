const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken')
const { getQuestions, getQuestionsByAssignment, createQuestion, deleteQuestion,updateQuestion } = require('../Controllers/QuestionsController.js');
const authenticateToken = require('../Utils/authenticateToken.js')

router.get('/',authenticateToken, getQuestions);
router.get('/:id',authenticateToken, getQuestionsByAssignment);
router.post('/',authenticateToken, createQuestion);
router.delete('/:id',authenticateToken, deleteQuestion);
router.put('/:id',authenticateToken,updateQuestion);

module.exports = router;