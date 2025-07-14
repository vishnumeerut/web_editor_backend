const mongoose = require('mongoose');

const TemplateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  html: {
    type: String,
    required: true,
  },
  css: {
    type: String,
    default: '',
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
}, {timestamps:true});

const Template = mongoose.model('Template', TemplateSchema);

module.exports = Template;