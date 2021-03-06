const mongoose = require('mongoose');



exports.connectDB = async () => {
  const DB_URI = process.env.ATLAS_URI;
  try {
    await mongoose.connect(`${DB_URI}`, {
      dbName: 'gme-sales',
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      auth: {
        user: process.env.AWS_USER,
        password: process.env.AWS_PASSWORD
      }
    });

    
    console.log('Database Connected...');
  } catch (err) {
    console.log({ MongoError: err });
  }
};
