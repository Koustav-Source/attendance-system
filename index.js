const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample Route
app.get('/', (req, res) => {
    res.send('Attendance System API is running');
});

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/attendance-system', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('✅ Connected to MongoDB');
}).catch(err => console.log('❌ MongoDB connection error: ', err));

// Start the Server
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});

