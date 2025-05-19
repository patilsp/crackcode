import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {
  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  if (!process.env.MONGO_URL) {
    throw new Error('Please define the MONGO_URL environment variable');
  }

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "crackthecode",
    });

    isConnected = true;
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error; // Re-throw the error for proper error handling
  }
}