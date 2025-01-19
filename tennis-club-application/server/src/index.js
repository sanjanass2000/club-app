// const express = require('express');
// const cors = require('cors');
// const helmet = require('helmet');
// require('dotenv').config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(helmet());
// app.use(express.json());

// // Test route
// app.get('/', (req, res) => {
//   res.json({ message: 'Welcome to Tennis Club API' });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


const express = require('express');
const cors = require('cors');
const { pool } = require('./config/database');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/api/test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ message: 'Database connected!', time: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});