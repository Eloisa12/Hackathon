import express from 'express';
import bodyParser from 'body-parser';
import { getData, setData } from './data.js';
import path from 'path'; // Import the 'path' module

const app = express();
const port = 3000;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join('./Hackathon', 'public')));

// Define your API endpoint for collecting user data
app.post('/api/collectUserData', (req, res) => {
    const userData = req.body;

    // Save user data
    setData(userData);

    res.status(200).json({ message: 'User data saved successfully' });
});

// Catch-all route to serve your 'index.html' for all other requests
app.get('*', (req, res) => {
    res.sendFile(path.join('./Hackathon', 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
