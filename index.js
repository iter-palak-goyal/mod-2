const express = require('express');
const _ = require('lodash');
const minimist = require('minimist');
const axios = require('axios');

const app = express();
app.use(express.json());

// Parse command line arguments using minimist (vulnerable to prototype pollution in 1.2.0)
const argv = minimist(process.argv.slice(2));
console.log('CLI arguments parsed:', argv);

app.get('/', (req, res) => {
  // Use lodash defaultsDeep (vulnerable to prototype pollution in 4.17.15)
  const defaultSettings = { theme: 'light' };
  const userSettings = req.query.settings ? JSON.parse(req.query.settings) : {};
  const settings = _.defaultsDeep({}, userSettings, defaultSettings);

  res.json({
    message: 'Hello, World!',
    settings: settings
  });
});

app.get('/fetch', async (req, res) => {
  // Use axios (vulnerable to SSRF / open redirect in older versions)
  const url = req.query.url;
  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
