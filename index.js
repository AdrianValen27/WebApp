const express = require('express');
const app = express();

// Defining our single endpoint that returns the JSON object
app.get('/', (req, res) => {
    // Callback function that generates a message and unique timestamp
    const data = {
        message: "My name is Adrian Valencia",
        timestamp: Date.now(),
    };
    // Sending the JSON data back to the client
    res.json(data);
});

// Start our Express server on port 80
app.listen(80, () => {
    console.log('Server is running on port 80');
});