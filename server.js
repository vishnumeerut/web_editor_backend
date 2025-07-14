const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
// const templateRoutes = require('./routes/templates');
const { PORT, MONGODB_URI } = require('./config/server_config');
const { errorHandler } = require('./utils');
const TemplateRouter = require('./routes/Template');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
mongoose.connect(MONGODB_URI)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

app.use(errorHandler);

// Routes
app.use('/api/templates', TemplateRouter);
app.get("/", (req, res) => {
    return res.send("hello to new project!")
})

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});