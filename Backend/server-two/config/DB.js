const mongoose = require('mongoose');

async function connectDB(dbURI) {
  try {
    await mongoose.connect(dbURI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = connectDB;
