// filepath: /workspaces/directory-project/backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db/db');
const contactRoutes = require('./routes/contact');
const forumRoutes = require('./routes/forum');
const path = require('path');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Basic health check route
app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

// Serve uploaded files publicly
app.use('/upload', express.static(path.join(__dirname, 'public/upload')));

// Routes
app.use('/api/directory', require('./routes/directoryRoutes'));
app.use('/api/search', require('./routes/searchRoutes'));
app.use('/api/contact', contactRoutes);
app.use('/api/forum', forumRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Export for Vercel
module.exports = app;

// Start server only if not in Vercel
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}