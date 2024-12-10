const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./database');
const menuRoutes = require('./routes/menuRoutes');

connectDB();

const frontendUrl = "https://menu-management-frontend.onrender.com";

// CORS configuration
const corsOptions = {
  origin: frontendUrl,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};

const app = express();
// Use CORS with the specified options
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/api', menuRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
