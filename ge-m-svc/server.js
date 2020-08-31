const express = require('express');
const cors = require('cors');

const mailer = require('./routes/mailer');

const app = express();

require('dotenv').config({ path: './.env' });

const corsOptions = { origin: process.env.GREMS_API_ORIGIN };

// PORT
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.GREMS_FRONTEND_ORIGIN,
    optionsSuccessStatus: 200,
  }),
);

// Routes
app.use('/grems-mailer/', mailer);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
