const express = require('express');
const app = express();

// Defining our single endpoint that returns the JSON object
app.get('/', (req, res) => {
    const data = {
        message: "My name is Adrian Valencia",
        timestamp: Date.now(),
    };
    res.json(data);
});

// Start our Express server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});