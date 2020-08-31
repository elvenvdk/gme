const express = require('express');
const cors = require('cors');

const mailer = require('./routes/mailer');

const app = express();

require('dotenv').config({ path: './.env' });

const corsOptions = {
  origin: [process.env.GREMS_API_ORIGIN, process.env.GREMS_FRONTEND_ORIGIN],
  optionsSuccessStatus: 200,
};

// PORT
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cors(corsOptions));

// Routes
app.use('/grems-mailer', mailer);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
