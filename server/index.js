import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './src/configs/connectdb.js';
import imageRoute from './src/routes/Image.Route.js';
import userRouter from './src/routes/User.Route.js';
import captionRouter from './src/routes/caption.Route.js';
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

app.get('/', (req, res) => {
  res.send('NextGen AI Studio Server is running...');
});

// Routes
app.use('/api/user', userRouter);
app.use('/api/image', imageRoute);
app.use('/api/caption', captionRouter);


// Server Start
const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}...`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

startServer();
