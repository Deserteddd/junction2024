const express = require('express');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express();
const port = 3000;

app.use(cors());

app.get('/api/data', async (req, res) => {
  try {
    const response = await fetch('https://www.kansalaisaloite.fi/api/v1/initiatives'); // Replace with your API URL
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Failed to fetch data' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})