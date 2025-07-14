const express = require('express');
const { getAllTemplates, getTemplateById, createTemplate, updateTemplate, deleteTemplateById } = require('../controllers/Template');
const TemplateRouter = express.Router();


// API Endpoints
TemplateRouter.get('/', getAllTemplates);
TemplateRouter.get('/:id', getTemplateById);
TemplateRouter.post('/', createTemplate);
TemplateRouter.put('/:id', updateTemplate);
TemplateRouter.delete('/:id', deleteTemplateById);

module.exports = TemplateRouter;