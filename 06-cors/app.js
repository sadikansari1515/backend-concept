// CORS ek rule hai jo browser ko batata hai ki kaunse domain se request allow hai.

// Same-origin policy ke wajah se dusre domain se request block hoti hai.

// Node.js mein cors middleware use karke hum allow kar sakte hain specific domains.


const express = require('express');
const cors = require('cors');
const app = express();

// Allow all origins (development)
app.use(cors());

// Restrict to specific origin (production)
app.use(cors({ origin: 'http://example.com' }));

app.get('/api', (req, res) => {
  res.json({ msg: 'CORS working!' });
});

app.get("/", cors(), (req, res) => { // routes ke ander likhne se keval ye wala route allow hoga
  res.send("Banned");
})

app.listen(3000, () => console.log('Server running on port 3000'));
