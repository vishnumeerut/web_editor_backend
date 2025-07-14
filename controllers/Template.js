const { Template } = require("../models");

// Get all templates
async function getAllTemplates(req, res, next) {
  try {
    const templates = await Template.find();
    return res.status(200).json({
      success: true,
      data: templates,
      message: "Templates fetched successfully",
    });
  } catch (err) {
    const error = new Error("Failed to fetch templates", {
      cause: err,
    });
    return next(error);
  }
}

// Get single template by ID
async function getTemplateById(req, res, next) {
  try {
    const { id } = req.params;
    if (!id) {
      const error = new Error("Template ID is required", {
        cause: new Error("Template ID is required"),
      });
      return next(error);
    }
    const template = await Template.findById(id);
    if (!template) return res.status(404).json({ error: "Template not found" });
    return res.status(200).json({
      success: true,
      data: template,
      message: "Template fetched successfully",
    });
  } catch (err) {
    const error = new Error("Failed to fetch templates", {
      cause: err,
    });
    return next(error);
  }
}

// Create new template
async function createTemplate(req, res, next) {
  try {
    const { name, html, css } = req.body;
    const newTemplate = new Template({ name, html, css });
    await newTemplate.save();
    return res.status(201).json({
      success: true,
      data: newTemplate,
      message: "Template created successfully",
    });
  } catch (err) {
    const error = new Error("Failed to Create templates", {
      cause: err,
    });
    return next(error);
  }
}

// Update template
async function updateTemplate(req, res, next) {

  try {
    const { html, css, name } = req.body;
    const { id } = req.params;

    if (!id) {
      const error = new Error("Template ID is required", {
        cause: new Error("Template ID is required"),
      });
      return next(error);
    }
    const updatedTemplate = await Template.findByIdAndUpdate(
      id,
      { html, css, name, lastUpdated: Date.now() },
      { new: true }
    );
    console.log("updatedTemplate is:", updatedTemplate);
    if (!updatedTemplate)
      return res.status(404).json({ error: "Template not found" });
    return res.status(200).json({
      success: true,
      data: updatedTemplate,
      message: "Template updated successfully",
    });
  } catch (err) {
    const error = new Error("Failed to update templates", {
      cause: err,
    });
    return next(error);
  }
}


async function deleteTemplateById(req, res, next) {
  try {
    const { id } = req.params;
    
    // Validate ID
    if (!id) {
      const error = new Error("Template ID is required", {
        cause: new Error("Template ID is required"),
      });
      return next(error);
    }

    // Check if template exists
    const template = await Template.findById(id);
    if (!template) {
      return res.status(404).json({ 
        success: false,
        error: "Template not found" 
      });
    }

    // Delete the template
    await Template.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      data: null,
      message: "Template deleted successfully",
    });

  } catch (err) {
    const error = new Error("Failed to delete template", {
      cause: err,
    });
    return next(error);
  }
}



module.exports = {
  getAllTemplates,
  getTemplateById,
  createTemplate,
  updateTemplate,
  deleteTemplateById,
};
