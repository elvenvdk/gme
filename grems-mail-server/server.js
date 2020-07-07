const express = require('express');

const confirmations = require('./routes/confirmations');

const app = express();

require('dotenv').config({ path: './.env' });

// PORT
const PORT = process.env.PORT;

// Middleware
app.use(express.json());

// Routes
app.use('/grems-mailer/confirmations', confirmations);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
