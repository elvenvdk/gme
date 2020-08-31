const mongoose = require('mongoose');

exports.connectDB = async () => {
  const MONGO_URL = process.env.MLAB_URI;
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log('Database Connected...');
  } catch (err) {
    console.log({ MongoError: err.message });
  }
};
