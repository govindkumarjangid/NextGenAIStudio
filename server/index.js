import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './src/configs/connectdb.js';
import ImageRoute from './src/routes/ImageRoute.js';
dotenv.config();

//app
const app = express();

// Database Connection
connectDB();

// Port
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/image', ImageRoute);


// Server Start
const startServer = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}...`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

startServer();
