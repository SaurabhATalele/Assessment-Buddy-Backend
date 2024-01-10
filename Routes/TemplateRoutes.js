const express = require('express');
const router = express.Router();
const {createTemplate, getTemplates, getTemplatesByOrg, deleteTemplate, updateTemplate} = require('../Controllers/TemplateController');
const authenticateToken = require("../Utils/authenticateToken.js")

router.post('/', createTemplate);
router.get('/', getTemplates);
router.get('/:id',authenticateToken, getTemplatesByOrg);
router.delete('/:id',authenticateToken, deleteTemplate);
router.patch('/:id',authenticateToken, updateTemplate);

module.exports = router;