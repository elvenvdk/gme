const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config({ path: './.env' });

const { connectDB } = require('./config/db');

const customerRoute = require('./routes/customer');
const venderRoute = require('./routes/vendor');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const ordersRoute = require('./routes/orders');
const categoryRoute = require('./routes/category');
const braintreeRoute = require('./routes/braintree');
const bodyParser = require('body-parser');
const testmonialsRoute = require('./routes/testimionials');
const messagesRoute = require('./routes/messages');

const app = express();
const PORT = process.env.PORT;

const corsOptions = {
  origin: [process.env.FRONTEND_API, process.env.GE_NP_S_FRONTEND],
};

// Connect DB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors(corsOptions));

// Routing
app.use('/api/customer', customerRoute);
app.use('/api/vendor', venderRoute);
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);
app.use('/api/category', categoryRoute);
app.use('/api/braintree', braintreeRoute);
app.use('/api/orders', ordersRoute);
app.use('/api/testimonials', testmonialsRoute);
app.use('/api/messages', messagesRoute);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
