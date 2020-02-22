const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config({ path: './.env' });

const { connectDB } = require('./config/db');

const customerRoute = require('./routes/customer');

const app = express();
const PORT = process.env.PORT || 8000;

// Connect DB
connectDB();

// Middleware
app.use(cookieParser());
app.use(cors());

// Routing
app.use('/api/customer', customerRoute);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
