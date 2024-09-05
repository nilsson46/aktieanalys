const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/api/search', async (req, res) => {
    const query = req.query.query; // Assuming a query parameter named 'query'
    const url = `https://api.tiingo.com/tiingo/utilities/search?query=${encodeURIComponent(query)}&token=Y080e2994ceb2aec33b1d2f2a64551975f655df4e`;

    try {
        const apiResponse = await fetch(url);
        const data = await apiResponse.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));