import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Test Route
app.get('/', (req, res) => {
  res.send('AI Server is Running with ES Modules! 🚀');
});

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});