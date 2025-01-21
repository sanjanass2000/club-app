// server/src/index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const coachesRouter = require('./routes/coaches');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/coaches', coachesRouter);

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Tennis Club API is running' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});